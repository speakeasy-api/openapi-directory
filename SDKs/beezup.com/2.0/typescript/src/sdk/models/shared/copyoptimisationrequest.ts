import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CopyOptimisationRequest
/** 
 * Copy the optimisation between 2 channels
**/
export class CopyOptimisationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelIdSource" })
  channelIdSource: string;

  @SpeakeasyMetadata({ data: "json, name=channelIdTarget" })
  channelIdTarget: string;

  @SpeakeasyMetadata({ data: "json, name=keepExistingOptimisation" })
  keepExistingOptimisation: boolean;
}
