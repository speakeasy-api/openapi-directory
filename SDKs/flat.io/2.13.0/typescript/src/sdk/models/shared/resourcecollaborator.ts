import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { UserPublic } from "./userpublic";



// ResourceCollaborator
/** 
 * The rights of the current user on a score or collection
**/
export class ResourceCollaborator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aclAdmin" })
  aclAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclRead" })
  aclRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclWrite" })
  aclWrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invited" })
  invited?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isCollaborator" })
  isCollaborator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserPublic;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
