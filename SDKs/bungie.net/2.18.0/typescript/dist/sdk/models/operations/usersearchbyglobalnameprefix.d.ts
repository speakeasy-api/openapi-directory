import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserSearchByGlobalNamePrefixRequest extends SpeakeasyBase {
    /**
     * The display name prefix you're looking for.
     */
    displayNamePrefix: string;
    /**
     * The zero-based page of results you desire.
     */
    page: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserSearchByGlobalNamePrefix200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserUserSearchResponse;
    throttleSeconds?: number;
}
export declare class UserSearchByGlobalNamePrefixResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
