import { SpeakeasyBase } from "../../../internal/utils";
import { WaveAggregatedStatus } from "./waveaggregatedstatus";
/**
 * Success
 */
export declare class Wave extends SpeakeasyBase {
    arn?: string;
    creationDateTime?: string;
    description?: string;
    isArchived?: boolean;
    lastModifiedDateTime?: string;
    name?: string;
    tags?: Record<string, string>;
    waveAggregatedStatus?: WaveAggregatedStatus;
    waveID?: string;
}
