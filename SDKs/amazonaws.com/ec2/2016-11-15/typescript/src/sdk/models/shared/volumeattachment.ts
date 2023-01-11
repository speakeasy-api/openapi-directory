import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeAttachment
/** 
 * Describes volume attachment details.
**/
export class VolumeAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Record<string, any>;

  @SpeakeasyMetadata()
  deleteOnTermination?: Record<string, any>;

  @SpeakeasyMetadata()
  device?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  volumeId?: Record<string, any>;
}
