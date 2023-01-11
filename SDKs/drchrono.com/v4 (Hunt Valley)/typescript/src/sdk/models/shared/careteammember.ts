import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CareTeamMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
