import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFormByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetFormByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: string;
}


export class GetFormByIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class GetFormByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFormByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFormByIdQueryParams;

  @SpeakeasyMetadata()
  headers: GetFormByIdHeaders;
}


export class GetFormByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formResponse?: shared.FormResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
