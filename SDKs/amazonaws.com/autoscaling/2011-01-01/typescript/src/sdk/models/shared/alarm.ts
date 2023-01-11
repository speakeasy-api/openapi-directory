import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Alarm
/** 
 * Describes an alarm.
**/
export class Alarm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alarmARN?: string;

  @SpeakeasyMetadata()
  alarmName?: string;
}
