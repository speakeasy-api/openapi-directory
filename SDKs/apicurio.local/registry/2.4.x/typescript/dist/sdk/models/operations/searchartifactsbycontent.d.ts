import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sort order, ascending (`asc`) or descending (`desc`).
 */
export declare enum SearchArtifactsByContentOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The field to sort by.  Can be one of:
 *
 * @remarks
 *
 * * `name`
 * * `createdOn`
 *
 */
export declare enum SearchArtifactsByContentOrderbyEnum {
    Name = "name",
    CreatedOn = "createdOn"
}
export declare class SearchArtifactsByContentRequest extends SpeakeasyBase {
    /**
     * The content to search for.
     */
    requestBody: Uint8Array;
    /**
     * Indicates the type of artifact represented by the content being used for the search.  This is only needed when using the `canonical` query parameter, so that the server knows how to canonicalize the content prior to searching for matching artifacts.
     */
    artifactType?: string;
    /**
     * Parameter that can be set to `true` to indicate that the server should "canonicalize" the content when searching for matching artifacts.  Canonicalization is unique to each artifact type, but typically involves removing any extra whitespace and formatting the content in a consistent manner.  Must be used along with the `artifactType` query parameter.
     */
    canonical?: boolean;
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of artifacts to skip before starting to collect the result set.  Defaults to 0.
     */
    offset?: number;
    /**
     * Sort order, ascending (`asc`) or descending (`desc`).
     */
    order?: SearchArtifactsByContentOrderEnum;
    /**
     * The field to sort by.  Can be one of:
     *
     * @remarks
     *
     * * `name`
     * * `createdOn`
     *
     */
    orderby?: SearchArtifactsByContentOrderbyEnum;
}
export declare class SearchArtifactsByContentResponse extends SpeakeasyBase {
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
