import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an EBS volume for a Scheduled Instance.
 */
export declare class ScheduledInstancesEbs extends SpeakeasyBase {
    deleteOnTermination?: boolean;
    encrypted?: boolean;
    iops?: number;
    snapshotId?: string;
    volumeSize?: number;
    volumeType?: string;
}
