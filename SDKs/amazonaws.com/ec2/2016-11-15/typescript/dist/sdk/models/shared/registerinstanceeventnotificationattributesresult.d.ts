import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resulting set of tag keys.
 */
export declare class RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: boolean;
    instanceTagKeys?: string[];
}
/**
 * Success
 */
export declare class RegisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
