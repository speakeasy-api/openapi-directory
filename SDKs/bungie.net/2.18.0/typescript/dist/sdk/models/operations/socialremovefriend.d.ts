import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SocialRemoveFriendSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SocialRemoveFriendRequest extends SpeakeasyBase {
    /**
     * The membership id of the user you wish to remove.
     */
    membershipId: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialRemoveFriend200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: boolean;
    throttleSeconds?: number;
}
export declare class SocialRemoveFriendResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
