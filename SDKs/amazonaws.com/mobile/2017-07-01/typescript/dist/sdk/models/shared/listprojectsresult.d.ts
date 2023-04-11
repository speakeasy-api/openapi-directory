import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
/**
 *  Result structure used for requests to list projects in AWS Mobile Hub.
 */
export declare class ListProjectsResult extends SpeakeasyBase {
    /**
     *  Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries.
     */
    nextToken?: string;
    /**
     *  List of projects.
     */
    projects?: ProjectSummary[];
}
