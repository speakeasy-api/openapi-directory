import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailListOwnerUser } from "./emaillistowneruser";



// EmailListRelationships
/** 
 * Related record summary info
**/
export class EmailListRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ownerUser" })
  ownerUser?: EmailListOwnerUser;
}
