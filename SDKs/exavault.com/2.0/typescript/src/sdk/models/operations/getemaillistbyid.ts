import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmailListByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetEmailListByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetEmailListByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetEmailListByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEmailListByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEmailListByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetEmailListByIdHeaders;
}


export class GetEmailListByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailListResponse?: shared.EmailListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
