import { SpeakeasyBase } from "../../../internal/utils";
import { DuplicateProductValueConfiguration } from "./duplicateproductvalueconfiguration";
import { InputConfiguration } from "./inputconfiguration";
import { SchedulingTypeEnum } from "./schedulingtypeenum";
/**
 * Auto import configuration
 */
export declare class AutoImportConfiguration extends SpeakeasyBase {
    /**
     * Describe how you want to manage the duplication of the product value
     */
    duplicateProductConfiguration: DuplicateProductValueConfiguration;
    /**
     * Describe the input configuration
     */
    input: InputConfiguration;
    /**
     * The user identifier
     */
    inputConfiguredByUserId: string;
    /**
     * The user identifier
     */
    pauseStatusChangedByUserId?: string;
    /**
     * Indicate when the pause status has changed in UTC date.
     */
    pauseStatusChangedUtcDate?: Date;
    /**
     * Indicate if the auto import is in pause or not.
     */
    paused: boolean;
    /**
     * The user identifier
     */
    scheduledByUserId?: string;
    /**
     * Indicate the time zone name of the scheduling. If the scheduling type is "Schedule"
     */
    schedulingLocalTimeZoneName?: string;
    /**
     * Indicate the scheduling type. Schedule or Interval. We recommand you to use interval for a better reporting.
     */
    schedulingType: SchedulingTypeEnum;
    /**
     * Indicate the scheduling value. If the scheduling type is Interval then the value will be a duration otherwise the values will be the time.
     */
    schedulingValue: string[];
}
