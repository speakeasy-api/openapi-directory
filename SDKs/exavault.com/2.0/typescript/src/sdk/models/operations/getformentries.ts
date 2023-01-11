import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFormEntriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFormEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetFormEntriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetFormEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFormEntriesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFormEntriesQueryParams;

  @SpeakeasyMetadata()
  headers: GetFormEntriesHeaders;
}


export class GetFormEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formEntryResponse?: shared.FormEntryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
