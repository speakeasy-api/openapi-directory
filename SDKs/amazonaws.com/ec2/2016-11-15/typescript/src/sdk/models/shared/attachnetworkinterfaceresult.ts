import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachNetworkInterfaceResult
/** 
 * Contains the output of AttachNetworkInterface.
**/
export class AttachNetworkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkCardIndex?: Record<string, any>;
}
