import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskNote extends SpeakeasyBase {
    /**
     * If the task note is archived or not
     */
    archived?: boolean;
    createdAt?: string;
    /**
     * ID of the `/api/users` who created the note
     */
    createdBy?: string;
    id?: number;
    /**
     * ID of task this note is related with
     */
    task: number;
    /**
     * Content of the task note
     */
    text: string;
    updatedAt?: string;
}
