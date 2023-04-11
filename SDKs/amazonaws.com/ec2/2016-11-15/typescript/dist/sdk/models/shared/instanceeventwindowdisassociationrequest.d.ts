import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class InstanceEventWindowDisassociationRequestInstanceTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The targets to disassociate from the specified event window.
 */
export declare class InstanceEventWindowDisassociationRequest extends SpeakeasyBase {
    dedicatedHostIds?: string[];
    instanceIds?: string[];
    instanceTags?: InstanceEventWindowDisassociationRequestInstanceTags[];
}
