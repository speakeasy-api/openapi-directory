import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SocialRemoveFriendRequestSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SocialRemoveFriendRequestRequest extends SpeakeasyBase {
    /**
     * The membership id of the user you wish to remove.
     */
    membershipId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialRemoveFriendRequest200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class SocialRemoveFriendRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
