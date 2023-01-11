import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute
/** 
 * The resulting set of tag keys.
**/
export class DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  includeAllTagsOfInstance?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceTagKeys?: Record<string, any>;
}


export class DeregisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
