import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StatusSkuApiV1StatusSkuGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class StatusSkuApiV1StatusSkuGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StatusSkuApiV1StatusSkuGetQueryParams;
}


export class StatusSkuApiV1StatusSkuGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCall?: shared.StatusCall;

  @SpeakeasyMetadata()
  statusCode: number;
}
