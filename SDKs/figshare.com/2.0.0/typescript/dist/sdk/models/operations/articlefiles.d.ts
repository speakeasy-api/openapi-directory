import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleFilesRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
}
export declare class ArticleFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. List of article files
     */
    publicFiles?: shared.PublicFile[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
