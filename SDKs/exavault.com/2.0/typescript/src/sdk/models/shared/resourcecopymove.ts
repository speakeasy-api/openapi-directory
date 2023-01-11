import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";



// ResourceCopyMove
/** 
 * Resource which was successfully copied or moved.
**/
export class ResourceCopyMove extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Resource;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: Record<string, any>;
}
