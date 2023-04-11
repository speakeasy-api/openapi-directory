import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CommunityContentGetCommunityContentRequest extends SpeakeasyBase {
    /**
     * The type of media to get
     */
    mediaFilter: number;
    /**
     * Zero based page
     */
    page: number;
    /**
     * The sort mode.
     */
    sort: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class CommunityContentGetCommunityContent200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ForumPostSearchResponse;
    throttleSeconds?: number;
}
export declare class CommunityContentGetCommunityContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
