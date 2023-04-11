import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SocialIssueFriendRequestSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SocialIssueFriendRequestRequest extends SpeakeasyBase {
    /**
     * The membership id of the user you wish to add.
     */
    membershipId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialIssueFriendRequest200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class SocialIssueFriendRequestResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
