import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticlePrivateLinkDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticlePrivateLinkDeleteRequest extends SpeakeasyBase {
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Private link token
     */
    linkId: string;
}
export declare class PrivateArticlePrivateLinkDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
