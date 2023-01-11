import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resulting set of tag keys.
**/
export declare class RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: Record<string, any>;
    instanceTagKeys?: Record<string, any>;
}
export declare class RegisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
