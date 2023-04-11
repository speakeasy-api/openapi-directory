import { SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationError } from "./datareplicationerror";
import { DataReplicationInfoReplicatedDisk } from "./datareplicationinforeplicateddisk";
import { DataReplicationInitiation } from "./datareplicationinitiation";
import { DataReplicationStateEnum } from "./datareplicationstateenum";
/**
 * Information about Data Replication
 */
export declare class DataReplicationInfo extends SpeakeasyBase {
    dataReplicationError?: DataReplicationError;
    dataReplicationInitiation?: DataReplicationInitiation;
    dataReplicationState?: DataReplicationStateEnum;
    etaDateTime?: string;
    lagDuration?: string;
    replicatedDisks?: DataReplicationInfoReplicatedDisk[];
    stagingAvailabilityZone?: string;
}
