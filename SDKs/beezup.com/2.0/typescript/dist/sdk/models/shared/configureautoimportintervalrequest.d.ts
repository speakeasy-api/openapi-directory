import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message request to configure the auto import interval
 */
export declare class ConfigureAutoImportIntervalRequest extends SpeakeasyBase {
    /**
     * Indicate the interval in time span. (i.e. "04:00:00" for every 4 hours)
     */
    interval: string;
}
