import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionArticlesReplaceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionArticlesReplaceRequest extends SpeakeasyBase {
    /**
     * Articles List
     */
    articlesCreator: shared.ArticlesCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionArticlesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
