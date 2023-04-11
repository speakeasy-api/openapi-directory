import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateCollectionCategoriesListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateCollectionCategoriesListRequest extends SpeakeasyBase {
    /**
     * Collection unique identifier
     */
    collectionId: number;
}
export declare class PrivateCollectionCategoriesListResponse extends SpeakeasyBase {
    /**
     * OK. Categories list
     */
    categories?: shared.Category[];
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
