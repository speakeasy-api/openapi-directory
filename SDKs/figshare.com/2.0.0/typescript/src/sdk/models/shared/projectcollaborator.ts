import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectCollaborator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=role_name" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: number;
}
