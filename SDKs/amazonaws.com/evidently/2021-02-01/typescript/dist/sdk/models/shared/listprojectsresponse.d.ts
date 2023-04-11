import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
/**
 * Success
 */
export declare class ListProjectsResponse extends SpeakeasyBase {
    nextToken?: string;
    projects?: ProjectSummary[];
}
