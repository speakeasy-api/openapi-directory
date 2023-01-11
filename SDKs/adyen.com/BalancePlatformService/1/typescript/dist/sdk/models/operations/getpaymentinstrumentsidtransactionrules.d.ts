import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInstrumentsIdTransactionRulesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPaymentInstrumentsIdTransactionRulesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetPaymentInstrumentsIdTransactionRulesRequest extends SpeakeasyBase {
    pathParams: GetPaymentInstrumentsIdTransactionRulesPathParams;
    security: GetPaymentInstrumentsIdTransactionRulesSecurity;
}
export declare class GetPaymentInstrumentsIdTransactionRulesResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRulesResponse?: any;
}
