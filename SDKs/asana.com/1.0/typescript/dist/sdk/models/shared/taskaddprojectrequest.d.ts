import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskAddProjectRequest extends SpeakeasyBase {
    /**
     * A task in the project to insert the task after, or `null` to insert at the beginning of the list.
     */
    insertAfter?: string;
    /**
     * A task in the project to insert the task before, or `null` to insert at the end of the list.
     */
    insertBefore?: string;
    /**
     * The project to add the task to.
     */
    project: string;
    /**
     * A section in the project to insert the task into. The task will be inserted at the bottom of the section.
     */
    section?: string;
}
