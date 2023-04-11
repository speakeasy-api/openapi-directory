import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EditCollectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class EditCollectionRequest extends SpeakeasyBase {
    collectionModification?: shared.CollectionModification;
    /**
     * Unique identifier of the collection.
     *
     * @remarks
     * The following aliases are supported:
     * - `root`: The root collection of the account
     * - `sharedWithMe`: Automatically contains new resources that have been shared individually
     * - `trash`: Automatically contains resources that have been deleted
     *
     */
    collection: string;
}
export declare class EditCollectionResponse extends SpeakeasyBase {
    /**
     * Collection details
     */
    collection?: shared.Collection;
    contentType: string;
    /**
     * Not granted to access to this collection
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
