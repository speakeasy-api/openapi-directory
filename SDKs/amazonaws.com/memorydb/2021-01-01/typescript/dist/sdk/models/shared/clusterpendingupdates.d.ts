import { SpeakeasyBase } from "../../../internal/utils";
import { ACLsUpdateStatus } from "./aclsupdatestatus";
import { PendingModifiedServiceUpdate } from "./pendingmodifiedserviceupdate";
import { ReshardingStatus } from "./reshardingstatus";
/**
 * A list of updates being applied to the cluster
 */
export declare class ClusterPendingUpdates extends SpeakeasyBase {
    acLs?: ACLsUpdateStatus;
    resharding?: ReshardingStatus;
    serviceUpdates?: PendingModifiedServiceUpdate[];
}
