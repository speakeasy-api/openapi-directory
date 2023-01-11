import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFormByShareHashIncludeEnum {
    Share = "share"
}


export class GetFormByShareHashQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: GetFormByShareHashIncludeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=shareHash" })
  shareHash: string;
}


export class GetFormByShareHashHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetFormByShareHashRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFormByShareHashQueryParams;

  @SpeakeasyMetadata()
  headers: GetFormByShareHashHeaders;
}


export class GetFormByShareHashResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formResponse?: shared.FormResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
