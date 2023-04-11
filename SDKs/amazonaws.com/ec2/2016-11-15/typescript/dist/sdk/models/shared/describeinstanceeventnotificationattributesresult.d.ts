import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the registered tag keys.
 */
export declare class DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
/**
 * Success
 */
export declare class DescribeInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
