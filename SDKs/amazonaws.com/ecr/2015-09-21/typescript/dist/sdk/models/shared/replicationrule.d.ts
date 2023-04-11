import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationDestination } from "./replicationdestination";
import { RepositoryFilter } from "./repositoryfilter";
/**
 * An array of objects representing the replication destinations and repository filters for a replication configuration.
 */
export declare class ReplicationRule extends SpeakeasyBase {
    destinations: ReplicationDestination[];
    repositoryFilters?: RepositoryFilter[];
}
