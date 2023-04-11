import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectArticleDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectArticleDeleteRequest extends SpeakeasyBase {
    /**
     * Project Article unique identifier
     */
    articleId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectArticleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
