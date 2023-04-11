import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommentsByArticleIdRequest extends SpeakeasyBase {
    /**
     * Article identifier.
     */
    aId?: string;
    /**
     * Podcast Episode identifier.
     */
    pId?: string;
}
export declare class GetCommentsByArticleIdResponse extends SpeakeasyBase {
    /**
     * A List of Comments
     */
    comments?: shared.Comment[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
