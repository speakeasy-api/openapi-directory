import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;
}
