import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StatusCallApiV1StatusCallGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class StatusCallApiV1StatusCallGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StatusCallApiV1StatusCallGetQueryParams;
}


export class StatusCallApiV1StatusCallGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCall?: shared.StatusCall;

  @SpeakeasyMetadata()
  statusCode: number;
}
