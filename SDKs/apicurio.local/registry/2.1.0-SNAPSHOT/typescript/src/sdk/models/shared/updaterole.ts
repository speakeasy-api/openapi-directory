import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";



export class UpdateRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=role" })
  role: RoleTypeEnum;
}
