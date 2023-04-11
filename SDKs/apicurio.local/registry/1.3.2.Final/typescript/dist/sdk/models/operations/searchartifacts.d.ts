import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sort order, ascending or descending.
 */
export declare enum SearchArtifactsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * What fields to search.
 */
export declare enum SearchArtifactsOverEnum {
    Everything = "everything",
    Name = "name",
    Description = "description",
    Labels = "labels"
}
export declare class SearchArtifactsRequest extends SpeakeasyBase {
    /**
     * The number of artifacts to return.
     */
    limit: number;
    /**
     * The number of artifacts to skip before starting to collect the result set.
     */
    offset: number;
    /**
     * Sort order, ascending or descending.
     */
    order?: SearchArtifactsOrderEnum;
    /**
     * What fields to search.
     */
    over?: SearchArtifactsOverEnum;
    /**
     * The text to search.
     */
    search?: string;
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
