import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsGetCommentRequest extends SpeakeasyBase {
    /**
     * comment_id parameter
     */
    commentId: number;
    /**
     * gist_id parameter
     */
    gistId: string;
}
export declare class GistsGetComment403ApplicationJSONBlock extends SpeakeasyBase {
    createdAt?: string;
    htmlUrl?: string;
    reason?: string;
}
/**
 * Forbidden Gist
 */
export declare class GistsGetComment403ApplicationJSON extends SpeakeasyBase {
    block?: GistsGetComment403ApplicationJSONBlock;
    documentationUrl?: string;
    message?: string;
}
export declare class GistsGetCommentResponse extends SpeakeasyBase {
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
    /**
     * Forbidden Gist
     */
    gistsGetComment403ApplicationJSONObject?: GistsGetComment403ApplicationJSON;
}
