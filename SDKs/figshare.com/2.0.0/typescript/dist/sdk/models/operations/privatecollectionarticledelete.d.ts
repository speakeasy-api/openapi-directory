import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionArticleDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionArticleDeleteRequest extends SpeakeasyBase {
    /**
     * Collection article unique identifier
     */
    articleId: number;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionArticleDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
