import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEmailListsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetEmailListsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetEmailListsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEmailListsQueryParams;

  @SpeakeasyMetadata()
  headers: GetEmailListsHeaders;
}


export class GetEmailListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  emailListCollectionResponse?: shared.EmailListCollectionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
