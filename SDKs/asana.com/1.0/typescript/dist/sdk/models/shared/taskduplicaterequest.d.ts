import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The fields that will be duplicated to the new task.
 */
export declare enum TaskDuplicateRequestIncludeEnum {
    Notes = "notes",
    Assignee = "assignee",
    Subtasks = "subtasks",
    Attachments = "attachments",
    Tags = "tags",
    Followers = "followers",
    Projects = "projects",
    Dates = "dates",
    Dependencies = "dependencies",
    Parent = "parent"
}
export declare class TaskDuplicateRequest extends SpeakeasyBase {
    /**
     * The fields that will be duplicated to the new task.
     */
    include?: TaskDuplicateRequestIncludeEnum;
    /**
     * The name of the new task.
     */
    name?: string;
}
