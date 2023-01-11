import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleTypeEnum } from "./roletypeenum";



// RoleMapping
/** 
 * The mapping between a user/principal and their role.
**/
export class RoleMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: RoleTypeEnum;
}
