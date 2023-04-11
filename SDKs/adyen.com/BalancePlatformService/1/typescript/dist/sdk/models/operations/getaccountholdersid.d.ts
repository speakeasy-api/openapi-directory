import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountHoldersIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class GetAccountHoldersIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the account holder.
     */
    id: string;
}
export declare class GetAccountHoldersIdResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    accountHolder?: shared.AccountHolder;
    contentType: string;
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    restServiceError?: shared.RestServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
