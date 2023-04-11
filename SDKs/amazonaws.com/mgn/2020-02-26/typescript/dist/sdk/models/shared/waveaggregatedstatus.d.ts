import { SpeakeasyBase } from "../../../internal/utils";
import { WaveHealthStatusEnum } from "./wavehealthstatusenum";
import { WaveProgressStatusEnum } from "./waveprogressstatusenum";
/**
 * Wave aggregated status.
 */
export declare class WaveAggregatedStatus extends SpeakeasyBase {
    healthStatus?: WaveHealthStatusEnum;
    lastUpdateDateTime?: string;
    progressStatus?: WaveProgressStatusEnum;
    replicationStartedDateTime?: string;
    totalApplications?: number;
}
