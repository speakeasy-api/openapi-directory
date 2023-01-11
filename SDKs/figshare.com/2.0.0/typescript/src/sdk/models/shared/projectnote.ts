import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_date" })
  modifiedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;
}
