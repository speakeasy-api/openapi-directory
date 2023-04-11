import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionCategoriesAddSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionCategoriesAddRequest extends SpeakeasyBase {
    /**
     * Categories list
     */
    categoriesCreator: shared.CategoriesCreator;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionCategoriesAddResponse extends SpeakeasyBase {
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
