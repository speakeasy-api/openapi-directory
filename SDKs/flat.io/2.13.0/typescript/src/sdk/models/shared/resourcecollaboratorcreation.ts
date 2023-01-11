import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceCollaboratorCreation
/** 
 * Add a collaborator to a resource.
**/
export class ResourceCollaboratorCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aclAdmin" })
  aclAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclRead" })
  aclRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=aclWrite" })
  aclWrite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=userToken" })
  userToken?: string;
}
