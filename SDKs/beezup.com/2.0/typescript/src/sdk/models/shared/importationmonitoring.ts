import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationMonitoringLinks } from "./importationmonitoringlinks";



// ImportationMonitoring
/** 
 * Describe the reporting of the catalog importation
**/
export class ImportationMonitoring extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beginUtcDate" })
  beginUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors?: BeezUpCommonUserErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ImportationMonitoringLinks;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps: Record<string, boolean>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
