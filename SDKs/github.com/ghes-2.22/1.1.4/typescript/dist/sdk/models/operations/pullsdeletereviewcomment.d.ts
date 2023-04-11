import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsDeleteReviewCommentRequest extends SpeakeasyBase {
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
export declare class PullsDeleteReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
