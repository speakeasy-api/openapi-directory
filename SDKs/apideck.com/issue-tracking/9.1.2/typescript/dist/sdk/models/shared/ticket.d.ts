import { SpeakeasyBase } from "../../../internal/utils";
import { Assignee, AssigneeInput } from "./assignee";
import { CollectionTag, CollectionTagInput } from "./collectiontag";
/**
 * Priority of the ticket
 */
export declare enum TicketPriorityEnum {
    Low = "low",
    Normal = "normal",
    High = "high",
    Urgent = "urgent"
}
export declare class TicketInput extends SpeakeasyBase {
    assignees?: AssigneeInput[];
    /**
     * The ticket's description. HTML version of description is mapped if supported by the third-party platform
     */
    description?: string;
    /**
     * Due date of the ticket
     */
    dueDate?: Date;
    /**
     * The ticket's parent ID
     */
    parentId?: string;
    /**
     * Priority of the ticket
     */
    priority?: TicketPriorityEnum;
    /**
     * The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.
     */
    status?: string;
    /**
     * Subject of the ticket
     */
    subject?: string;
    tags?: CollectionTagInput[];
    /**
     * The ticket's type
     */
    type?: string;
}
export declare class Ticket extends SpeakeasyBase {
    assignees?: Assignee[];
    /**
     * The ticket's collection ID
     */
    collectionId?: string;
    /**
     * When the ticket was completed
     */
    completedAt?: Date;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * The ticket's description. HTML version of description is mapped if supported by the third-party platform
     */
    description?: string;
    /**
     * Due date of the ticket
     */
    dueDate?: Date;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The ticket's parent ID
     */
    parentId?: string;
    /**
     * Priority of the ticket
     */
    priority?: TicketPriorityEnum;
    /**
     * The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.
     */
    status?: string;
    /**
     * Subject of the ticket
     */
    subject?: string;
    tags?: CollectionTag[];
    /**
     * The ticket's type
     */
    type?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
