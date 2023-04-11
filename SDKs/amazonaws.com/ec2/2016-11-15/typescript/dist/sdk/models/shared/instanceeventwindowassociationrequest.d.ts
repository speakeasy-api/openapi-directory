import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class InstanceEventWindowAssociationRequestInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * One or more targets associated with the specified event window. Only one <i>type</i> of target (instance ID, instance tag, or Dedicated Host ID) can be associated with an event window.
 */
export declare class InstanceEventWindowAssociationRequest extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    instanceTags?: InstanceEventWindowAssociationRequestInstanceTags[];
}
