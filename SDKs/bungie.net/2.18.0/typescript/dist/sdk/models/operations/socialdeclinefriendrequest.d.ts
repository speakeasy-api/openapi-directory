import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SocialDeclineFriendRequestSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SocialDeclineFriendRequestRequest extends SpeakeasyBase {
    /**
     * The membership id of the user you wish to decline.
     */
    membershipId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialDeclineFriendRequest200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class SocialDeclineFriendRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
