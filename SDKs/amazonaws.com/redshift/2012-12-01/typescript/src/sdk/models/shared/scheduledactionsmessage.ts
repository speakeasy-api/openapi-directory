import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionList } from "./scheduledactionlist";



export class ScheduledActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ScheduledActionList })
  scheduledActions?: ScheduledActionList[];
}
