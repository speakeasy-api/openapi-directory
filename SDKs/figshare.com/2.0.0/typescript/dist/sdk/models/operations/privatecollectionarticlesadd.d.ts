import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionArticlesAddSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionArticlesAddRequest extends SpeakeasyBase {
    /**
     * Articles list
     */
    articlesCreator: shared.ArticlesCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionArticlesAddResponse extends SpeakeasyBase {
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
