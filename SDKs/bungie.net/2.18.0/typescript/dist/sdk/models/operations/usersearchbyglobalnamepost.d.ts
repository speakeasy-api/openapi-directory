import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserSearchByGlobalNamePostRequest extends SpeakeasyBase {
    /**
     * The zero-based page of results you desire.
     */
    page: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class UserSearchByGlobalNamePost200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.UserUserSearchResponse;
    throttleSeconds?: number;
}
export declare class UserSearchByGlobalNamePostResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
