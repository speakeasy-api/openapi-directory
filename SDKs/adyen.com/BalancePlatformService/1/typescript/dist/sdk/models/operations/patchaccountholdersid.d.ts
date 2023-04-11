import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchAccountHoldersIdSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PatchAccountHoldersIdRequest extends SpeakeasyBase {
    accountHolderInput?: shared.AccountHolderInput;
    /**
     * The unique identifier of the account holder.
     */
    id: string;
}
export declare class PatchAccountHoldersIdResponse extends SpeakeasyBase {
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
