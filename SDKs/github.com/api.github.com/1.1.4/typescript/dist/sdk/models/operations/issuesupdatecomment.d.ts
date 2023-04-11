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
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
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
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
