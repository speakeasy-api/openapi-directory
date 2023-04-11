import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticleResourceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticleResourceRequest extends SpeakeasyBase {
    /**
     * Resource data
     */
    resource: shared.Resource;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticleResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Reset Content
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
