import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ForumGetPostAndParentRequest extends SpeakeasyBase {
    childPostId: number;
    /**
     * If this value is not null or empty, banned posts are requested to be returned
     */
    showbanned?: string;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class ForumGetPostAndParent200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.ForumPostSearchResponse;
    throttleSeconds?: number;
}
export declare class ForumGetPostAndParentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
