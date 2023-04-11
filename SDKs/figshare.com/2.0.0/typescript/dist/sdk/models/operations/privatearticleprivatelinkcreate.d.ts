import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateArticlePrivateLinkCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateArticlePrivateLinkCreateRequest extends SpeakeasyBase {
    privateLinkCreator?: shared.PrivateLinkCreator;
    /**
     * Article unique identifier
     */
    articleId: number;
}
export declare class PrivateArticlePrivateLinkCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    privateLinkResponse?: shared.PrivateLinkResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
