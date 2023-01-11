import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentInstrumentGroupsIdTransactionRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPaymentInstrumentGroupsIdTransactionRulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetPaymentInstrumentGroupsIdTransactionRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentInstrumentGroupsIdTransactionRulesPathParams;

  @SpeakeasyMetadata()
  security: GetPaymentInstrumentGroupsIdTransactionRulesSecurity;
}


export class GetPaymentInstrumentGroupsIdTransactionRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionRulesResponse?: any;
}
