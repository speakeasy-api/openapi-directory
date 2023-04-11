import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateCommitCommentRequestBody extends SpeakeasyBase {
    /**
     * The contents of the comment.
     */
    body: string;
    /**
     * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
     */
    line?: number;
    /**
     * Relative path of the file to comment on.
     */
    path?: string;
    /**
     * Line index in the diff to comment on.
     */
    position?: number;
}
export declare class ReposCreateCommitCommentRequest extends SpeakeasyBase {
    requestBody: ReposCreateCommitCommentRequestBody;
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class ReposCreateCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commitComment?: shared.CommitComment;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
