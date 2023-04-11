import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddScoreToCollectionSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class AddScoreToCollectionRequest extends SpeakeasyBase {
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
     * Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
     *
     * @remarks
     *
     */
    score: string;
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
}
export declare class AddScoreToCollectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not granted to access to this collection or score
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * Score details
     */
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
