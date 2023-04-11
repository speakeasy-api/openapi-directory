import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGetMembershipFromHardLinkedCredentialRequest extends SpeakeasyBase {
    /**
     * The credential type. 'SteamId' is the only valid value at present.
     */
    crType: number;
    /**
     * The credential to look up. Must be a valid SteamID64.
     */
    credential: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserGetMembershipFromHardLinkedCredential200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserHardLinkedUserMembership;
    throttleSeconds?: number;
}
export declare class UserGetMembershipFromHardLinkedCredentialResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
