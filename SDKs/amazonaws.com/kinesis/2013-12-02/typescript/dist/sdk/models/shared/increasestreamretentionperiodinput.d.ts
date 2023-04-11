import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
 */
export declare class IncreaseStreamRetentionPeriodInput extends SpeakeasyBase {
    retentionPeriodHours: number;
    streamARN?: string;
    streamName?: string;
}
