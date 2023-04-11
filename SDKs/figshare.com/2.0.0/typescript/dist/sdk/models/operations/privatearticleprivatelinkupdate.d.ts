import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticlePrivateLinkUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticlePrivateLinkUpdateRequest extends SpeakeasyBase {
    privateLinkCreator?: shared.PrivateLinkCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
    /**
     * Private link token
     */
    linkId: string;
}
export declare class PrivateArticlePrivateLinkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
