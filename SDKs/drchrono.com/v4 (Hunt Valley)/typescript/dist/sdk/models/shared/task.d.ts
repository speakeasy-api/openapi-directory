import { SpeakeasyBase } from "../../../internal/utils";
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
    type?: TaskAssociatedTaskItemTypeEnum;
    value?: number;
}
/**
 * When the task is due
**/
export declare class TaskTaskReminder extends SpeakeasyBase {
    time?: string;
}
/**
 * Task note object
**/
export declare class TaskTaskNote extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: string;
    createdBy?: string;
    id?: number;
    task?: number;
    text?: string;
    updatedAt?: string;
}
export declare enum TaskPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}
export declare class Task extends SpeakeasyBase {
    archived?: boolean;
    assignedBy?: string;
    assigneeGroup?: number;
    assigneeUser?: string;
    associatedItems?: TaskAssociatedTaskItem[];
    category?: number;
    createdAt?: string;
    createdBy?: string;
    dueDate?: TaskTaskReminder;
    id?: number;
    notes?: TaskTaskNote[];
    priority?: TaskPriorityEnum;
    status: number;
    title: string;
    updatedAt?: string;
}
