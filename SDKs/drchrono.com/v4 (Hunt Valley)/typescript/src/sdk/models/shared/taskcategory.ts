import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_global" })
  isGlobal?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group" })
  practiceGroup: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
