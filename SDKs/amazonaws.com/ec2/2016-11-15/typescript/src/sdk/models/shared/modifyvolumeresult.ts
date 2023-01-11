import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyVolumeResultVolumeModification
/** 
 * Information about the volume modification.
**/
export class ModifyVolumeResultVolumeModification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endTime?: Record<string, any>;

  @SpeakeasyMetadata()
  modificationState?: Record<string, any>;

  @SpeakeasyMetadata()
  originalIops?: Record<string, any>;

  @SpeakeasyMetadata()
  originalMultiAttachEnabled?: Record<string, any>;

  @SpeakeasyMetadata()
  originalSize?: Record<string, any>;

  @SpeakeasyMetadata()
  originalThroughput?: Record<string, any>;

  @SpeakeasyMetadata()
  originalVolumeType?: Record<string, any>;

  @SpeakeasyMetadata()
  progress?: Record<string, any>;

  @SpeakeasyMetadata()
  startTime?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;

  @SpeakeasyMetadata()
  targetIops?: Record<string, any>;

  @SpeakeasyMetadata()
  targetMultiAttachEnabled?: Record<string, any>;

  @SpeakeasyMetadata()
  targetSize?: Record<string, any>;

  @SpeakeasyMetadata()
  targetThroughput?: Record<string, any>;

  @SpeakeasyMetadata()
  targetVolumeType?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeId?: Record<string, any>;
}


export class ModifyVolumeResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  volumeModification?: ModifyVolumeResultVolumeModification;
}
