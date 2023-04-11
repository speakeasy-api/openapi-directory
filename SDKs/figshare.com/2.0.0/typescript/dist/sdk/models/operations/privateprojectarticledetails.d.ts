import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectArticleDetailsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectArticleDetailsRequest extends SpeakeasyBase {
    /**
     * Project Article unique identifier
     */
    articleId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectArticleDetailsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Article representation
     */
    projectArticle?: shared.ProjectArticle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
