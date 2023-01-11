import { SpeakeasyBase } from "../../../internal/utils";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { InputConfiguration } from "./inputconfiguration";
import { SchedulingTypeEnum } from "./schedulingtypeenum";
export declare class AutoImportConfiguration extends SpeakeasyBase {
    duplicateProductConfiguration: DuplicateProductValueConfiguration;
    input: InputConfiguration;
    inputConfiguredByUserId: string;
    pauseStatusChangedByUserId?: string;
    pauseStatusChangedUtcDate?: Date;
    paused: boolean;
    scheduledByUserId?: string;
    schedulingLocalTimeZoneName?: string;
    schedulingType: SchedulingTypeEnum;
    schedulingValue: string[];
}
