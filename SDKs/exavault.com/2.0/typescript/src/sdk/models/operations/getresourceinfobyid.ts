import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourceInfoByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourceInfoByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetResourceInfoByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetResourceInfoByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourceInfoByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourceInfoByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetResourceInfoByIdHeaders;
}


export class GetResourceInfoByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceResponse?: shared.ResourceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
