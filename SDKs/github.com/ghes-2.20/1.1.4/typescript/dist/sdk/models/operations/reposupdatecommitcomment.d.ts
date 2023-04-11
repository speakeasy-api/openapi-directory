import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateCommitCommentRequestBody extends SpeakeasyBase {
    /**
     * The contents of the comment
     */
    body: string;
}
export declare class ReposUpdateCommitCommentRequest extends SpeakeasyBase {
    requestBody: ReposUpdateCommitCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commitComment?: shared.CommitComment;
}
