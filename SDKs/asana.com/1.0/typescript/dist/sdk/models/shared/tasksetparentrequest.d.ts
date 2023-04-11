import { SpeakeasyBase } from "../../../internal/utils";
export declare class TaskSetParentRequest extends SpeakeasyBase {
    /**
     * A subtask of the parent to insert the task after, or `null` to insert at the beginning of the list.
     */
    insertAfter?: string;
    /**
     * A subtask of the parent to insert the task before, or `null` to insert at the end of the list.
     */
    insertBefore?: string;
    /**
     * The new parent of the task, or `null` for no parent.
     */
    parent: string;
}
