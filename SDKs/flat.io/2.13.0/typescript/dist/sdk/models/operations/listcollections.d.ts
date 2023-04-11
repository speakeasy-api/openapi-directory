import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCollectionsSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * Sort direction
 */
export declare enum ListCollectionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Sort
 */
export declare enum ListCollectionsSortEnum {
    CreationDate = "creationDate",
    Title = "title"
}
export declare class ListCollectionsRequest extends SpeakeasyBase {
    /**
     * Sort direction
     */
    direction?: ListCollectionsDirectionEnum;
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
     * List the collection contained in this `parent` collection.
     *
     * @remarks
     *
     * This option doesn't provide a complete multi-level collection support.
     * When sharing a collection with someone, this one will have as `parent` `sharedWithMe`.
     *
     */
    parent?: string;
    /**
     * An opaque string cursor to fetch the previous page of data.
     *
     * @remarks
     * The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.
     *
     */
    previous?: string;
    /**
     * Sort
     */
    sort?: ListCollectionsSortEnum;
}
export declare class ListCollectionsResponse extends SpeakeasyBase {
    /**
     * List of collections
     */
    collections?: shared.Collection[];
    contentType: string;
    /**
     * Error
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
