import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationReportingLinks } from "./importationreportinglinks";



// ImportationReporting
/** 
 * The catalog importation reporting
**/
export class ImportationReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoImported" })
  autoImported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=beginUtcDate" })
  beginUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=endUtcDate" })
  endUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors?: BeezUpCommonUserErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "json, name=inputConfigurationUrl" })
  inputConfigurationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: ImportationReportingLinks;

  @SpeakeasyMetadata({ data: "json, name=stepName" })
  stepName?: string;

  @SpeakeasyMetadata({ data: "json, name=steps" })
  steps: Record<string, boolean>;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalProductCount" })
  totalProductCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalProductErrorCount" })
  totalProductErrorCount?: number;

  @SpeakeasyMetadata({ data: "json, name=totalProductSuccessCount" })
  totalProductSuccessCount?: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
