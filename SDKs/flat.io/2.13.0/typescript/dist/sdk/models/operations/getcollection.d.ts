import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCollectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class GetCollectionRequest extends SpeakeasyBase {
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
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
}
export declare class GetCollectionResponse extends SpeakeasyBase {
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
