import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTransactionsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetTransactionsRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/accountHolders/{id}__queryParam_id).
     */
    accountHolderId?: string;
    /**
     * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id).
     */
    balanceAccountId?: string;
    /**
     * Unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id).
     */
    balancePlatform?: string;
    /**
     * Only include transactions that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdSince: Date;
    /**
     * Only include transactions that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.
     */
    createdUntil: Date;
    /**
     * The `cursor` returned in the links of the previous response.
     */
    cursor?: string;
    /**
     * The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.
     */
    limit?: number;
    /**
     * Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/paymentInstruments/_id_).
     */
    paymentInstrumentId?: string;
}
export declare class GetTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized - authentication required.
     */
    restServiceError?: shared.RestServiceError;
    /**
     * OK - the request has succeeded.
     */
    transactionSearchResponse?: shared.TransactionSearchResponse;
}
