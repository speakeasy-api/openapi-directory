import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseTypeEnum } from "./licensetypeenum";
import { ReplicationJobStateEnum } from "./replicationjobstateenum";
import { ReplicationRun } from "./replicationrun";
import { ServerTypeEnum } from "./servertypeenum";
import { VmServer } from "./vmserver";
/**
 * Represents a replication job.
 */
export declare class ReplicationJob extends SpeakeasyBase {
    description?: string;
    encrypted?: boolean;
    frequency?: number;
    kmsKeyId?: string;
    latestAmiId?: string;
    licenseType?: LicenseTypeEnum;
    nextReplicationRunStartTime?: Date;
    numberOfRecentAmisToKeep?: number;
    replicationJobId?: string;
    replicationRunList?: ReplicationRun[];
    roleName?: string;
    runOnce?: boolean;
    seedReplicationTime?: Date;
    serverId?: string;
    serverType?: ServerTypeEnum;
    state?: ReplicationJobStateEnum;
    statusMessage?: string;
    vmServer?: VmServer;
}
