import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The elements that will be duplicated to the new project. Tasks are always included.
 */
export declare enum ProjectDuplicateRequestIncludeEnum {
    Members = "members",
    Notes = "notes",
    Forms = "forms",
    TaskNotes = "task_notes",
    TaskAssignee = "task_assignee",
    TaskSubtasks = "task_subtasks",
    TaskAttachments = "task_attachments",
    TaskDates = "task_dates",
    TaskDependencies = "task_dependencies",
    TaskFollowers = "task_followers",
    TaskTags = "task_tags",
    TaskProjects = "task_projects"
}
/**
 * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
 */
export declare class ProjectDuplicateRequestScheduleDates extends SpeakeasyBase {
    /**
     * Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.
     */
    dueOn?: string;
    /**
     * Determines if the auto-shifted dates should skip weekends.
     */
    shouldSkipWeekends: boolean;
    /**
     * Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.
     */
    startOn?: string;
}
export declare class ProjectDuplicateRequest extends SpeakeasyBase {
    /**
     * The elements that will be duplicated to the new project. Tasks are always included.
     */
    include?: ProjectDuplicateRequestIncludeEnum;
    /**
     * The name of the new project.
     */
    name: string;
    /**
     * A dictionary of options to auto-shift dates. `task_dates` must be included to use this option. Requires either `start_on` or `due_on`, but not both.
     */
    scheduleDates?: ProjectDuplicateRequestScheduleDates;
    /**
     * Sets the team of the new project. If team is not defined, the new project will be in the same team as the the original project.
     */
    team?: string;
}
