import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can be one of `"Appointment"`, `"Patient"`, `"Message"`, `"Document"`, `"Lab order"`
 */
export declare enum TaskAssociatedTaskItemTypeEnum {
    Patient = "Patient",
    Appointment = "Appointment",
    LabOrder = "Lab order",
    Document = "Document",
    Message = "Message",
    LabDocument = "Lab document",
    LabResult = "Lab result",
    Communication = "Communication"
}
export declare class TaskAssociatedTaskItem extends SpeakeasyBase {
    task?: number;
    /**
     * Can be one of `"Appointment"`, `"Patient"`, `"Message"`, `"Document"`, `"Lab order"`
     */
    type?: TaskAssociatedTaskItemTypeEnum;
    /**
     * ID of the specified type object
     */
    value?: number;
}
/**
 * When the task is due
 */
export declare class TaskTaskReminder extends SpeakeasyBase {
    /**
     * Due date time
     */
    time?: string;
}
/**
 * Task note object
 */
export declare class TaskTaskNote extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    createdBy?: string;
    id?: number;
    /**
     * ID of `/api/tasks`
     */
    task?: number;
    text?: string;
    updatedAt?: string;
}
/**
 * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
 */
export declare enum TaskPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}
/**
 * Created
 */
export declare class Task extends SpeakeasyBase {
    archived?: boolean;
    /**
     * ID of `/api/users/` who assigned the task
     */
    assignedBy?: string;
    /**
     * Either `assignee_user` or `assignee_group` should be set
     */
    assigneeGroup?: number;
    /**
     * Either `assignee_user` or `assignee_group` should be set
     */
    assigneeUser?: string;
    /**
     * Associated task items
     */
    associatedItems?: TaskAssociatedTaskItem[];
    category?: number;
    createdAt?: string;
    /**
     * ID of `/api/users` who created the task
     */
    createdBy?: string;
    /**
     * When the task is due
     */
    dueDate?: TaskTaskReminder;
    id?: number;
    /**
     * Additional notes of the task
     */
    notes?: TaskTaskNote[];
    /**
     * Can be one of the following 10(Low), 20(Medium), 30(High), 40(Urgent)
     */
    priority?: TaskPriorityEnum;
    status: number;
    title: string;
    updatedAt?: string;
}
