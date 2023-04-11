import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleVersionUpdateThumbSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class ArticleVersionUpdateThumbRequest extends SpeakeasyBase {
    /**
     * File ID
     */
    fileId: shared.FileId;
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Article version identifier
     */
    versionId: number;
}
export declare class ArticleVersionUpdateThumbResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
