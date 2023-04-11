import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";
import { ProjectTemplateCompact } from "./projecttemplatecompact";
import { TaskCompact } from "./taskcompact";
/**
 * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
 */
export declare enum JobResponseStatusEnum {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * A *job* is an object representing a process that handles asynchronous work.
 */
export declare class JobResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    newProject?: ProjectCompact;
    newProjectTemplate?: ProjectTemplateCompact;
    newTask?: TaskCompact;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    resourceSubtype?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`, or `failed`.
     */
    status?: JobResponseStatusEnum;
}
