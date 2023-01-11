import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Snapshot
/** 
 * Describes a snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dataEncryptionKeyId?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  encrypted?: Record<string, any>;

  @SpeakeasyMetadata()
  kmsKeyId?: Record<string, any>;

  @SpeakeasyMetadata()
  outpostArn?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerAlias?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotId?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  stateMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeId?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeSize?: Record<string, any>;
}
