import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelationshipData } from "./relationshipdata";



// EmailListOwnerUser
/** 
 * Information for user who owns the email list
**/
export class EmailListOwnerUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: RelationshipData;
}
