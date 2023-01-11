import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateActionList } from "./updateactionlist";



export class UpdateActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: UpdateActionList })
  updateActions?: UpdateActionList[];
}
