import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionCategoryDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionCategoryDeleteRequest extends SpeakeasyBase {
    /**
     * Collection category unique identifier
     */
    categoryId: number;
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionCategoryDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
