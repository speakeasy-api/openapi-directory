import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The attribute of the network interface. This parameter is required.
 */
export declare enum DescribeNetworkInterfaceAttributeRequestAttributeEnum {
    Description = "description",
    GroupSet = "groupSet",
    SourceDestCheck = "sourceDestCheck",
    Attachment = "attachment"
}
/**
 * Contains the parameters for DescribeNetworkInterfaceAttribute.
 */
export declare class DescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    attribute?: DescribeNetworkInterfaceAttributeRequestAttributeEnum;
    dryRun?: boolean;
    networkInterfaceId: string;
}
