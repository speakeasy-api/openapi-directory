import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JobLogEventData
/** 
 * Job log data
**/
export class JobLogEventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversionServerID" })
  conversionServerID?: string;

  @SpeakeasyMetadata({ data: "json, name=rawError" })
  rawError?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerID?: string;

  @SpeakeasyMetadata({ data: "json, name=targetInstanceID" })
  targetInstanceID?: string;
}
