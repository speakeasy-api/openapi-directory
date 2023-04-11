import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCollectionScoresSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Sort direction
 */
export declare enum ListCollectionScoresDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Sort
 */
export declare enum ListCollectionScoresSortEnum {
    CreationDate = "creationDate",
    ModificationDate = "modificationDate",
    Title = "title"
}
export declare class ListCollectionScoresRequest extends SpeakeasyBase {
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
     * Sort direction
     */
    direction?: ListCollectionScoresDirectionEnum;
    /**
     * This is the maximum number of objects that may be returned
     */
    limit?: number;
    /**
     * An opaque string cursor to fetch the next page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    next?: string;
    /**
     * An opaque string cursor to fetch the previous page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    previous?: string;
    /**
     * This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
     *
     * @remarks
     *
     */
    sharingKey?: string;
    /**
     * Sort
     */
    sort?: ListCollectionScoresSortEnum;
}
export declare class ListCollectionScoresResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * List of scores
     */
    scoreDetails?: shared.ScoreDetails[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
