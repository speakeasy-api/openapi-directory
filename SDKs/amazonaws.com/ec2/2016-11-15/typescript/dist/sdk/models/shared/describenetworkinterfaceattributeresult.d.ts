import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ENA Express configuration for UDP network traffic.
 */
export declare class DescribeNetworkInterfaceAttributeResultAttachmentEnaSrdSpecificationEnaSrdUdpSpecification extends SpeakeasyBase {
    enaSrdUdpEnabled?: boolean;
}
/**
 * Configures ENA Express for the network interface that this action attaches to the instance.
 */
export declare class DescribeNetworkInterfaceAttributeResultAttachmentEnaSrdSpecification extends SpeakeasyBase {
    enaSrdEnabled?: boolean;
    enaSrdUdpSpecification?: DescribeNetworkInterfaceAttributeResultAttachmentEnaSrdSpecificationEnaSrdUdpSpecification;
}
/**
 * The attachment state.
 */
export declare enum DescribeNetworkInterfaceAttributeResultAttachmentStatusEnum {
    Attaching = "attaching",
    Attached = "attached",
    Detaching = "detaching",
    Detached = "detached"
}
/**
 * The attachment (if any) of the network interface.
 */
export declare class DescribeNetworkInterfaceAttributeResultAttachment extends SpeakeasyBase {
    attachTime?: Date;
    attachmentId?: string;
    deleteOnTermination?: boolean;
    deviceIndex?: number;
    enaSrdSpecification?: DescribeNetworkInterfaceAttributeResultAttachmentEnaSrdSpecification;
    instanceId?: string;
    instanceOwnerId?: string;
    networkCardIndex?: number;
    status?: DescribeNetworkInterfaceAttributeResultAttachmentStatusEnum;
}
/**
 * The description of the network interface.
 */
export declare class DescribeNetworkInterfaceAttributeResultDescription extends SpeakeasyBase {
    value?: string;
}
/**
 * Describes a security group.
 */
export declare class DescribeNetworkInterfaceAttributeResultGroups extends SpeakeasyBase {
    groupId?: string;
    groupName?: string;
}
/**
 * Indicates whether source/destination checking is enabled.
 */
export declare class DescribeNetworkInterfaceAttributeResultSourceDestCheck extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Contains the output of DescribeNetworkInterfaceAttribute.
 */
export declare class DescribeNetworkInterfaceAttributeResult extends SpeakeasyBase {
    attachment?: DescribeNetworkInterfaceAttributeResultAttachment;
    description?: DescribeNetworkInterfaceAttributeResultDescription;
    groups?: DescribeNetworkInterfaceAttributeResultGroups[];
    networkInterfaceId?: string;
    sourceDestCheck?: DescribeNetworkInterfaceAttributeResultSourceDestCheck;
}
