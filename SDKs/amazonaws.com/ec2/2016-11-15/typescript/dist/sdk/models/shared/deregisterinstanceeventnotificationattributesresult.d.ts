import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The resulting set of tag keys.
**/
export declare class DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute extends SpeakeasyBase {
    includeAllTagsOfInstance?: Record<string, any>;
    instanceTagKeys?: Record<string, any>;
}
export declare class DeregisterInstanceEventNotificationAttributesResult extends SpeakeasyBase {
    instanceTagAttribute?: DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute;
}
