import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentInstrumentsIdTransactionRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPaymentInstrumentsIdTransactionRulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetPaymentInstrumentsIdTransactionRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentInstrumentsIdTransactionRulesPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentInstrumentsIdTransactionRulesSecurity;
}


export class GetPaymentInstrumentsIdTransactionRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionRulesResponse?: any;
}
