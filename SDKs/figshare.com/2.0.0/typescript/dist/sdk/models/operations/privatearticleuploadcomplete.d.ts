import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleUploadCompleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleUploadCompleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * File unique identifier
     */
    fileId: number;
}
export declare class PrivateArticleUploadCompleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
