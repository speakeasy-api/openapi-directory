import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGetCredentialTypesForTargetAccountRequest extends SpeakeasyBase {
    /**
     * The user's membership id
     */
    membershipId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserGetCredentialTypesForTargetAccount200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserModelsGetCredentialTypesForAccountResponse[];
    throttleSeconds?: number;
}
export declare class UserGetCredentialTypesForTargetAccountResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
