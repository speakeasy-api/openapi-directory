import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_doctor" })
  isDoctor?: string;

  @SpeakeasyMetadata({ data: "json, name=is_staff" })
  isStaff?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string;

  @SpeakeasyMetadata({ data: "json, name=practice_group" })
  practiceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
