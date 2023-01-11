import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetPreviewImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Large = "large"
}


export class GetPreviewImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size: GetPreviewImageSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetPreviewImageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetPreviewImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPreviewImageQueryParams;

  @SpeakeasyMetadata()
  headers: GetPreviewImageHeaders;
}


export class GetPreviewImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  previewFileResponse?: shared.PreviewFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
