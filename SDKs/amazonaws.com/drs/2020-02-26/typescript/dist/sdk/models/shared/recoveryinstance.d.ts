import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceStateEnum } from "./ec2instancestateenum";
import { OriginEnvironmentEnum } from "./originenvironmentenum";
import { RecoveryInstanceDataReplicationInfo } from "./recoveryinstancedatareplicationinfo";
import { RecoveryInstanceFailback } from "./recoveryinstancefailback";
import { RecoveryInstanceProperties } from "./recoveryinstanceproperties";
/**
 * A Recovery Instance is a replica of a Source Server running on EC2.
 */
export declare class RecoveryInstance extends SpeakeasyBase {
    arn?: string;
    dataReplicationInfo?: RecoveryInstanceDataReplicationInfo;
    ec2InstanceID?: string;
    ec2InstanceState?: Ec2InstanceStateEnum;
    failback?: RecoveryInstanceFailback;
    isDrill?: boolean;
    jobID?: string;
    originAvailabilityZone?: string;
    originEnvironment?: OriginEnvironmentEnum;
    pointInTimeSnapshotDateTime?: string;
    recoveryInstanceID?: string;
    recoveryInstanceProperties?: RecoveryInstanceProperties;
    sourceServerID?: string;
    tags?: Record<string, string>;
}
