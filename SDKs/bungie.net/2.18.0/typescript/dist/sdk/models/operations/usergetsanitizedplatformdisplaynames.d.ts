import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UserGetSanitizedPlatformDisplayNamesRequest extends SpeakeasyBase {
    /**
     * The requested membership id to load.
     */
    membershipId: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserGetSanitizedPlatformDisplayNames200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: Record<string, string>;
    throttleSeconds?: number;
}
export declare class UserGetSanitizedPlatformDisplayNamesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
