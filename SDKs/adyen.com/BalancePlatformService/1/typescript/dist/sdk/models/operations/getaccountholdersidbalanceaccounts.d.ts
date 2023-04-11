import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountHoldersIdBalanceAccountsSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetAccountHoldersIdBalanceAccountsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account holder.
     */
    id: string;
    /**
     * The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.
     */
    limit?: number;
    /**
     * The number of items that you want to skip.
     */
    offset?: number;
}
export declare class GetAccountHoldersIdBalanceAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK - the request has succeeded.
     */
    paginatedBalanceAccountsResponse?: shared.PaginatedBalanceAccountsResponse;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
