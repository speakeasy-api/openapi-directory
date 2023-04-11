import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsUpdateCommentRequestBody extends SpeakeasyBase {
    /**
     * The comment text.
     */
    body: string;
}
export declare class GistsUpdateCommentRequest extends SpeakeasyBase {
    requestBody: GistsUpdateCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    /**
     * gist_id parameter
     */
    gistId: string;
}
export declare class GistsUpdateCommentResponse extends SpeakeasyBase {
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
    gistComment?: shared.GistComment;
}
