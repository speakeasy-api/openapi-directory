import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { InputConfiguration } from "./inputconfiguration";
import { SchedulingTypeEnum } from "./schedulingtypeenum";



export class AutoImportConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicateProductConfiguration" })
  duplicateProductConfiguration: DuplicateProductValueConfiguration;

  @SpeakeasyMetadata({ data: "json, name=input" })
  input: InputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=inputConfiguredByUserId" })
  inputConfiguredByUserId: string;

  @SpeakeasyMetadata({ data: "json, name=pauseStatusChangedByUserId" })
  pauseStatusChangedByUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=pauseStatusChangedUtcDate" })
  pauseStatusChangedUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=paused" })
  paused: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduledByUserId" })
  scheduledByUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingLocalTimeZoneName" })
  schedulingLocalTimeZoneName?: string;

  @SpeakeasyMetadata({ data: "json, name=schedulingType" })
  schedulingType: SchedulingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=schedulingValue" })
  schedulingValue: string[];
}
