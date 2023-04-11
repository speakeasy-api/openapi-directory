import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleFileRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * File unique identifier
     */
    fileId: number;
}
export declare class PrivateArticleFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Article private file
     */
    privateFile?: shared.PrivateFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
