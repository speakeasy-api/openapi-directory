import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationGroup } from "./replicationgroup";
/**
 * Success
 */
export declare class StartMigrationResponse extends SpeakeasyBase {
    /**
     * Contains all of the attributes of a specific Redis replication group.
     */
    replicationGroup?: ReplicationGroup;
}
