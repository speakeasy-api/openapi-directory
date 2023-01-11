import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute
/** 
 * The resulting set of tag keys.
**/
export class RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  includeAllTagsOfInstance?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceTagKeys?: Record<string, any>;
}


export class RegisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
