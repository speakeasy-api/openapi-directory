import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusEnum } from "./replicationstatusenum";
/**
 * Describes the destination file system in the replication configuration.
 */
export declare class Destination extends SpeakeasyBase {
    fileSystemId: string;
    lastReplicatedTimestamp?: Date;
    region: string;
    status: ReplicationStatusEnum;
}
