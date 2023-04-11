import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
 */
export declare enum ProjectsListCardsArchivedStateEnum {
    All = "all",
    Archived = "archived",
    NotArchived = "not_archived"
}
export declare class ProjectsListCardsRequest extends SpeakeasyBase {
    /**
     * Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
     */
    archivedState?: ProjectsListCardsArchivedStateEnum;
    /**
     * column_id parameter
     */
    columnId: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
export declare class ProjectsListCardsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    projectCards?: shared.ProjectCard[];
}
