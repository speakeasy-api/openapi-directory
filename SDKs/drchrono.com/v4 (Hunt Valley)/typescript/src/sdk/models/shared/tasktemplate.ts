import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskTemplateDefaultPriorityEnum {
    Ten = "10",
    Twenty = "20",
    Thirty = "30",
    Forty = "40"
}


export class TaskTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=default_assignee_group" })
  defaultAssigneeGroup?: number;

  @SpeakeasyMetadata({ data: "json, name=default_assignee_user" })
  defaultAssigneeUser?: string;

  @SpeakeasyMetadata({ data: "json, name=default_category" })
  defaultCategory?: number;

  @SpeakeasyMetadata({ data: "json, name=default_due_date_offset" })
  defaultDueDateOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=default_note" })
  defaultNote?: string;

  @SpeakeasyMetadata({ data: "json, name=default_priority" })
  defaultPriority?: TaskTemplateDefaultPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=default_status" })
  defaultStatus?: number;

  @SpeakeasyMetadata({ data: "json, name=default_title" })
  defaultTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group" })
  practiceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
