import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConversionRateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: shared.CurrencyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: shared.CurrencyEnum;
}


export class GetConversionRateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConversionRateQueryParams;
}


export class GetConversionRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationRate?: shared.ConversationRate;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
