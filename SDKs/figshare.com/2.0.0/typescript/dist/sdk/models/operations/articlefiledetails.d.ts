import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArticleFileDetailsRequest extends SpeakeasyBase {
    /**
     * Article Unique identifier
     */
    articleId: number;
    /**
     * File Unique identifier
     */
    fileId: number;
}
export declare class ArticleFileDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK. File representation
     */
    publicFile?: shared.PublicFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
