import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchArtifactsRequest extends SpeakeasyBase {
    /**
     * Filter by contentId.
     */
    contentId?: number;
    /**
     * Filter by description.
     */
    description?: string;
    /**
     * Filter by globalId.
     */
    globalId?: number;
    /**
     * Filter by artifact group.
     */
    group?: string;
    /**
     * Filter by label.  Include one or more label to only return artifacts containing all of the
     *
     * @remarks
     * specified labels.
     */
    labels?: string[];
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * Filter by artifact name.
     */
    name?: string;
    /**
     * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: shared.SortOrderEnum;
    /**
     * The field to sort by.  Can be one of:
     *
     * @remarks
     *
     * * `name`
     * * `createdOn`
     *
     */
    orderby?: shared.SortByEnum;
    /**
     * Filter by one or more name/value property.  Separate each name/value pair using a colon.  For
     *
     * @remarks
     * example `properties=foo:bar` will return only artifacts with a custom property named `foo`
     * and value `bar`.
     */
    properties?: string[];
}
export declare class SearchArtifactsResponse extends SpeakeasyBase {
    /**
     * On a successful response, returns a result set of artifacts - one for each artifact
     *
     * @remarks
     * in the registry that matches the criteria.
     */
    artifactSearchResults?: shared.ArtifactSearchResults;
    contentType: string;
    /**
     * Common response for all operations that can fail with an unexpected server error.
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
