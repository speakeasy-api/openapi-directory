import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ForumGetPostsThreadedPagedFromChildRequest extends SpeakeasyBase {
    childPostId: number;
    page: number;
    pageSize: number;
    replySize: number;
    rootThreadMode: boolean;
    /**
     * If this value is not null or empty, banned posts are requested to be returned
     */
    showbanned?: string;
    sortMode: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ForumGetPostsThreadedPagedFromChild200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ForumPostSearchResponse;
    throttleSeconds?: number;
}
export declare class ForumGetPostsThreadedPagedFromChildResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
