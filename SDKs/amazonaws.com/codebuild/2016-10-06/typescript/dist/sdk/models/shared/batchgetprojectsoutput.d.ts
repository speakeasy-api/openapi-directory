import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * Success
 */
export declare class BatchGetProjectsOutput extends SpeakeasyBase {
    projects?: Project[];
    projectsNotFound?: string[];
}
