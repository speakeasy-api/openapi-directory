import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionCategoriesReplaceSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionCategoriesReplaceRequest extends SpeakeasyBase {
    /**
     * Categories list
     */
    categoriesCreator: shared.CategoriesCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionCategoriesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
