import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCollectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class DeleteCollectionRequest extends SpeakeasyBase {
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
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to access to this collection
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
