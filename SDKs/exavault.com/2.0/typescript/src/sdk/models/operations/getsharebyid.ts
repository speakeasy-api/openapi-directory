import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetShareByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetShareByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetShareByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetShareByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShareByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetShareByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetShareByIdHeaders;
}


export class GetShareByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  shareResponse?: shared.ShareResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
