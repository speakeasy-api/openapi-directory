import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInstrumentGroupsIdTransactionRulesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPaymentInstrumentGroupsIdTransactionRulesSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetPaymentInstrumentGroupsIdTransactionRulesRequest extends SpeakeasyBase {
    pathParams: GetPaymentInstrumentGroupsIdTransactionRulesPathParams;
    security: GetPaymentInstrumentGroupsIdTransactionRulesSecurity;
}
export declare class GetPaymentInstrumentGroupsIdTransactionRulesResponse extends SpeakeasyBase {
    contentType: string;
    restServiceError?: any;
    statusCode: number;
    transactionRulesResponse?: any;
}
