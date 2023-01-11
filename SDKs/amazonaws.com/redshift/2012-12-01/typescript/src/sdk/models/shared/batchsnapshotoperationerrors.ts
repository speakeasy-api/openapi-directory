import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchSnapshotOperationErrors
/** 
 * Describes the errors returned by a snapshot.
**/
export class BatchSnapshotOperationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureReason?: string;

  @SpeakeasyMetadata()
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;
}
