import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsCreateReviewCommentAlternativeRequestBody extends SpeakeasyBase {
    /**
     * The text of the comment.
     */
    body: string;
    /**
     * The comment ID to reply to. **Note**: This must be the ID of a _top-level comment_, not a reply to that comment. Replies to replies are not supported.
     */
    inReplyTo?: number;
}
export declare class PullsCreateReviewCommentAlternativeRequest extends SpeakeasyBase {
    requestBody: PullsCreateReviewCommentAlternativeRequestBody;
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReviewCommentAlternativeResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    legacyReviewComment?: shared.LegacyReviewComment;
}
