import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigureAutoImportIntervalRequest
/** 
 * The message request to configure the auto import interval
**/
export class ConfigureAutoImportIntervalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval: string;
}
