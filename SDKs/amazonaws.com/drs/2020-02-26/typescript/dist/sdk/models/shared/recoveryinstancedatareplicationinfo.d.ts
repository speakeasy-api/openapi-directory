import { SpeakeasyBase } from "../../../internal/utils";
import { RecoveryInstanceDataReplicationError } from "./recoveryinstancedatareplicationerror";
import { RecoveryInstanceDataReplicationInfoReplicatedDisk } from "./recoveryinstancedatareplicationinforeplicateddisk";
import { RecoveryInstanceDataReplicationInitiation } from "./recoveryinstancedatareplicationinitiation";
import { RecoveryInstanceDataReplicationStateEnum } from "./recoveryinstancedatareplicationstateenum";
/**
 * Information about Data Replication
 */
export declare class RecoveryInstanceDataReplicationInfo extends SpeakeasyBase {
    dataReplicationError?: RecoveryInstanceDataReplicationError;
    dataReplicationInitiation?: RecoveryInstanceDataReplicationInitiation;
    dataReplicationState?: RecoveryInstanceDataReplicationStateEnum;
    etaDateTime?: string;
    lagDuration?: string;
    replicatedDisks?: RecoveryInstanceDataReplicationInfoReplicatedDisk[];
    stagingAvailabilityZone?: string;
}
