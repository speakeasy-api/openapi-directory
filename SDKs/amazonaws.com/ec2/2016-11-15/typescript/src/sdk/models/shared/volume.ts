import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Volume
/** 
 * Describes a volume.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachments?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  createTime?: Record<string, any>;

  @SpeakeasyMetadata()
  encrypted?: Record<string, any>;

  @SpeakeasyMetadata()
  fastRestored?: Record<string, any>;

  @SpeakeasyMetadata()
  iops?: Record<string, any>;

  @SpeakeasyMetadata()
  kmsKeyId?: Record<string, any>;

  @SpeakeasyMetadata()
  multiAttachEnabled?: Record<string, any>;

  @SpeakeasyMetadata()
  outpostArn?: Record<string, any>;

  @SpeakeasyMetadata()
  size?: Record<string, any>;

  @SpeakeasyMetadata()
  snapshotId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  throughput?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeId?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeType?: Record<string, any>;
}
