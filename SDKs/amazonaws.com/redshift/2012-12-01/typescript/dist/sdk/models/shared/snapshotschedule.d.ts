import { SpeakeasyBase } from "../../../internal/utils";
import { AssociatedClusterList } from "./associatedclusterlist";
import { TagList } from "./taglist";
/**
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates.
 */
export declare class SnapshotSchedule extends SpeakeasyBase {
    associatedClusterCount?: number;
    associatedClusters?: AssociatedClusterList[];
    nextInvocations?: Date[];
    scheduleDefinitions?: string[];
    scheduleDescription?: string;
    scheduleIdentifier?: string;
    tags?: TagList[];
}
