import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsCreateCommentRequestBody extends SpeakeasyBase {
    /**
     * The comment text.
     */
    body: string;
}
export declare class GistsCreateCommentRequest extends SpeakeasyBase {
    requestBody: GistsCreateCommentRequestBody;
    /**
     * gist_id parameter
     */
    gistId: string;
}
export declare class GistsCreateCommentResponse extends SpeakeasyBase {
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
    gistComment?: shared.GistComment;
}
