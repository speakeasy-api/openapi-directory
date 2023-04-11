import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resulting set of tag keys.
 */
export declare class DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
/**
 * Success
 */
export declare class DeregisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
