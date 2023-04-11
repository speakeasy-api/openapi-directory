import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
 */
export declare class DecreaseStreamRetentionPeriodInput extends SpeakeasyBase {
    retentionPeriodHours: number;
    streamARN?: string;
    streamName?: string;
}
