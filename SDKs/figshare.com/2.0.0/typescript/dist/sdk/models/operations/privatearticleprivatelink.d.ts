import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticlePrivateLinkSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticlePrivateLinkRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticlePrivateLinkResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Article private links
     */
    privateLinks?: shared.PrivateLink[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
