import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SocialAcceptFriendRequestSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SocialAcceptFriendRequestRequest extends SpeakeasyBase {
    /**
     * The membership id of the user you wish to accept.
     */
    membershipId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialAcceptFriendRequest200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class SocialAcceptFriendRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
