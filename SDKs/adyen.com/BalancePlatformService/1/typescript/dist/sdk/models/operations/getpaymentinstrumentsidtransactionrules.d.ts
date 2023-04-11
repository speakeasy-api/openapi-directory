import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPaymentInstrumentsIdTransactionRulesSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetPaymentInstrumentsIdTransactionRulesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the payment instrument.
     */
    id: string;
}
export declare class GetPaymentInstrumentsIdTransactionRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    transactionRulesResponse?: shared.TransactionRulesResponse;
}
