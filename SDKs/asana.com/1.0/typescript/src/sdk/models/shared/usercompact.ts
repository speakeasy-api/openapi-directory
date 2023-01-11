import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserCompact
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class UserCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// UserCompactInput
/** 
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
**/
export class UserCompactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
