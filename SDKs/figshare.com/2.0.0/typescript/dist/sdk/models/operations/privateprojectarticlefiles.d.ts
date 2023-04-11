import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectArticleFilesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectArticleFilesRequest extends SpeakeasyBase {
    /**
     * Project Article unique identifier
     */
    articleId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectArticleFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. List of files
     */
    privateFiles?: shared.PrivateFile[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
