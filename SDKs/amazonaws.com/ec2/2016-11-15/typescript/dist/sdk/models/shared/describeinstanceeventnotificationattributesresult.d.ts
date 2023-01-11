import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the registered tag keys.
**/
export declare class DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: Record<string, any>;
    instanceTagKeys?: Record<string, any>;
}
export declare class DescribeInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
