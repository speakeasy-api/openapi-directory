import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskAssociatedTaskItemTypeEnum {
    Patient = "Patient",
    Appointment = "Appointment",
    LabOrder = "Lab order",
    Document = "Document",
    Message = "Message",
    LabDocument = "Lab document",
    LabResult = "Lab result",
    Communication = "Communication"
}


export class TaskAssociatedTaskItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TaskAssociatedTaskItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}


// TaskTaskReminder
/** 
 * When the task is due
**/
export class TaskTaskReminder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}


// TaskTaskNote
/** 
 * Task note object
**/
export class TaskTaskNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}

export enum TaskPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}


export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=assigned_by" })
  assignedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=assignee_group" })
  assigneeGroup?: number;

  @SpeakeasyMetadata({ data: "json, name=assignee_user" })
  assigneeUser?: string;

  @SpeakeasyMetadata({ data: "json, name=associated_items", elemType: TaskAssociatedTaskItem })
  associatedItems?: TaskAssociatedTaskItem[];

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: TaskTaskReminder;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notes", elemType: TaskTaskNote })
  notes?: TaskTaskNote[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: TaskPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
