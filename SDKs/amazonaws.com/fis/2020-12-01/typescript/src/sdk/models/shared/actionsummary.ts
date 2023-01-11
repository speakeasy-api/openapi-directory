import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTarget } from "./actiontarget";



// ActionSummary
/** 
 * Provides a summary of an action.
**/
export class ActionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: ActionTarget })
  targets?: Record<string, ActionTarget>;
}
