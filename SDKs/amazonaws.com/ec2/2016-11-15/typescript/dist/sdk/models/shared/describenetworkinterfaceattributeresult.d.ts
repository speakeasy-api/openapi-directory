import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attachment (if any) of the network interface.
**/
export declare class DescribeNetworkInterfaceAttributeResultAttachment extends SpeakeasyBase {
    attachTime?: Record<string, any>;
    attachmentId?: Record<string, any>;
    deleteOnTermination?: Record<string, any>;
    deviceIndex?: Record<string, any>;
    instanceId?: Record<string, any>;
    instanceOwnerId?: Record<string, any>;
    networkCardIndex?: Record<string, any>;
    status?: Record<string, any>;
}
/**
 * The description of the network interface.
**/
export declare class DescribeNetworkInterfaceAttributeResultDescription extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Indicates whether source/destination checking is enabled.
**/
export declare class DescribeNetworkInterfaceAttributeResultSourceDestCheck extends SpeakeasyBase {
    value?: Record<string, any>;
}
/**
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
export declare class DescribeNetworkInterfaceAttributeResult extends SpeakeasyBase {
    attachment?: DescribeNetworkInterfaceAttributeResultAttachment;
    description?: DescribeNetworkInterfaceAttributeResultDescription;
    groups?: Record<string, any>;
    networkInterfaceId?: Record<string, any>;
    sourceDestCheck?: DescribeNetworkInterfaceAttributeResultSourceDestCheck;
}
