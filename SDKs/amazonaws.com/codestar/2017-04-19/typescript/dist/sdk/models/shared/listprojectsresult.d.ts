import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
/**
 * Success
 */
export declare class ListProjectsResult extends SpeakeasyBase {
    nextToken?: string;
    projects: ProjectSummary[];
}
