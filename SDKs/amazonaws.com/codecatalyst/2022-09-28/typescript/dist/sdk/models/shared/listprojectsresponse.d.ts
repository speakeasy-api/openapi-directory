import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSummary } from "./projectsummary";
/**
 * Success
 */
export declare class ListProjectsResponse extends SpeakeasyBase {
    items?: ProjectSummary[];
    nextToken?: string;
}
