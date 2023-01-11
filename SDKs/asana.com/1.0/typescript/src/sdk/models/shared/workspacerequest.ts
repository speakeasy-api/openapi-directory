import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkspaceRequestInput
/** 
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
export class WorkspaceRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
