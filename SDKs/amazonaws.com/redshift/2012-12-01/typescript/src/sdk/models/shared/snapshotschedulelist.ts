import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociatedClusterList } from "./associatedclusterlist";
import { TagList } from "./taglist";



// SnapshotScheduleList
/** 
 * Describes a snapshot schedule. You can set a regular interval for creating snapshots of a cluster. You can also schedule snapshots for specific dates. 
**/
export class SnapshotScheduleList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associatedClusterCount?: number;

  @SpeakeasyMetadata({ elemType: AssociatedClusterList })
  associatedClusters?: AssociatedClusterList[];

  @SpeakeasyMetadata()
  nextInvocations?: Record<string, any>[];

  @SpeakeasyMetadata()
  scheduleDefinitions?: Record<string, any>[];

  @SpeakeasyMetadata()
  scheduleDescription?: string;

  @SpeakeasyMetadata()
  scheduleIdentifier?: string;

  @SpeakeasyMetadata({ elemType: TagList })
  tags?: TagList[];
}
