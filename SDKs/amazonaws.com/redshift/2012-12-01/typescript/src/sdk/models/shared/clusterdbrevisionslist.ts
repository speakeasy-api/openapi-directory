import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RevisionTargetsList } from "./revisiontargetslist";



// ClusterDbRevisionsList
/** 
 * Describes a <code>ClusterDbRevision</code>.
**/
export class ClusterDbRevisionsList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  currentDatabaseRevision?: string;

  @SpeakeasyMetadata()
  databaseRevisionReleaseDate?: Date;

  @SpeakeasyMetadata({ elemType: RevisionTargetsList })
  revisionTargets?: RevisionTargetsList[];
}
