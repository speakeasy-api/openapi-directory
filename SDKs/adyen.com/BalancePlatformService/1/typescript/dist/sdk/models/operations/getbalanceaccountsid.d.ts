import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBalanceAccountsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetBalanceAccountsIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the balance account.
     */
    id: string;
}
export declare class GetBalanceAccountsIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    balanceAccount?: shared.BalanceAccount;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
