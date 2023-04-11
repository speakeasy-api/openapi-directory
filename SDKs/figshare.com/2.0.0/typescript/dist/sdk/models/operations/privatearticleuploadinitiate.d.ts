import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleUploadInitiateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleUploadInitiateRequest extends SpeakeasyBase {
    fileCreator: shared.FileCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleUploadInitiateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
