import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SocialGetPlatformFriendListRequest extends SpeakeasyBase {
    /**
     * The platform friend type.
     */
    friendPlatform: number;
    /**
     * The zero based page to return. Page size is 100.
     */
    page: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class SocialGetPlatformFriendList200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.SocialFriendsPlatformFriendResponse;
    throttleSeconds?: number;
}
export declare class SocialGetPlatformFriendListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
