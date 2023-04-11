import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectArticleFileSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectArticleFileRequest extends SpeakeasyBase {
    /**
     * Project Article unique identifier
     */
    articleId: number;
    /**
     * File unique identifier
     */
    fileId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectArticleFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. File representation
     */
    privateFile?: shared.PrivateFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
