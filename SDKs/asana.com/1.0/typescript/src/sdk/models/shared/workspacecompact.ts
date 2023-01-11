import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkspaceCompact
/** 
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export class WorkspaceCompact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}


// WorkspaceCompactInput
/** 
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export class WorkspaceCompactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
