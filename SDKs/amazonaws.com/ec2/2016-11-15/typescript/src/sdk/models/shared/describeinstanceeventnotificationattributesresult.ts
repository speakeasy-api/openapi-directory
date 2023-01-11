import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute
/** 
 * Information about the registered tag keys.
**/
export class DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata()
  includeAllTagsOfInstance?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceTagKeys?: Record<string, any>;
}


export class DescribeInstanceEventNotificationAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceTagAttribute?: DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
