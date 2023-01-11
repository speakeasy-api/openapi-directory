import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScheduleAutoImportRequest
/** 
 * The message request to schedule the auto import
**/
export class ScheduleAutoImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localTimeZoneName" })
  localTimeZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=schedules" })
  schedules: string[];
}
