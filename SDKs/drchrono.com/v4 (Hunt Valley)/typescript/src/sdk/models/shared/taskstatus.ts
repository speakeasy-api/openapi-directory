import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TaskStatusStatusCategoryEnum {
    O = "O",
    P = "P",
    H = "H",
    C = "C"
}


export class TaskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group" })
  practiceGroup: number;

  @SpeakeasyMetadata({ data: "json, name=status_category" })
  statusCategory?: TaskStatusStatusCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=task_category" })
  taskCategory?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
