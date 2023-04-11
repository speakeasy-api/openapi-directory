import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesUpdateCommentRequestBody extends SpeakeasyBase {
    /**
     * The contents of the comment.
     */
    body: string;
}
export declare class IssuesUpdateCommentRequest extends SpeakeasyBase {
    requestBody: IssuesUpdateCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
export declare class IssuesUpdateCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    issueComment?: shared.IssueComment;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
