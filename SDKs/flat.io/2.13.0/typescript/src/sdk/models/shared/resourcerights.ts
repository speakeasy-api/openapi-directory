import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceRights
/** 
 * The rights of the current user on a score or collection
**/
export class ResourceRights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aclAdmin" })
  aclAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclRead" })
  aclRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclWrite" })
  aclWrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isCollaborator" })
  isCollaborator?: boolean;
}
