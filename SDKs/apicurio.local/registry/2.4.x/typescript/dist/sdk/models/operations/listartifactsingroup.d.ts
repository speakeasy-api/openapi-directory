import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListArtifactsInGroupRequest extends SpeakeasyBase {
    /**
     * The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
     */
    groupId: string;
    /**
     * The number of artifacts to return.  Defaults to 20.
     */
    limit?: number;
    /**
     * The number of artifacts to skip before starting the result set.  Defaults to 0.
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
}
export declare class ListArtifactsInGroupResponse extends SpeakeasyBase {
    /**
     * On a successful response, returns a bounded set of artifacts.
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
