import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the configuration of an Amazon Elastic Block Store (Amazon EBS) volume.
 */
export declare class VolumeConfiguration extends SpeakeasyBase {
    volumeBaselineIOPS?: number;
    volumeBaselineThroughput?: number;
    volumeBurstIOPS?: number;
    volumeBurstThroughput?: number;
    volumeSize?: number;
    volumeType?: string;
}
