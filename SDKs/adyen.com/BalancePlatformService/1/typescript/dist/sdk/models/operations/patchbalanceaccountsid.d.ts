import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchBalanceAccountsIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchBalanceAccountsIdRequest extends SpeakeasyBase {
    balanceAccountUpdateRequestInput?: shared.BalanceAccountUpdateRequestInput;
    /**
     * The unique identifier of the balance account.
     */
    id: string;
}
export declare class PatchBalanceAccountsIdResponse extends SpeakeasyBase {
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
