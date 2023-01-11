import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShortAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: number;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_user_id" })
  institutionUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;
}
