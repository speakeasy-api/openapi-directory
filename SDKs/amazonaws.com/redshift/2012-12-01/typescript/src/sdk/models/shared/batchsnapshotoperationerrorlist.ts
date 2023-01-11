import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchSnapshotOperationErrorList
/** 
 * Describes the errors returned by a snapshot.
**/
export class BatchSnapshotOperationErrorList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureReason?: string;

  @SpeakeasyMetadata()
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;
}
