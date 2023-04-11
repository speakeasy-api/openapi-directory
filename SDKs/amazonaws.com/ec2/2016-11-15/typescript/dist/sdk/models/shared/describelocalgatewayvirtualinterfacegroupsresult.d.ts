import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewayVirtualInterfaceGroupsResultLocalGatewayVirtualInterfaceGroupsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a local gateway virtual interface group.
 */
export declare class DescribeLocalGatewayVirtualInterfaceGroupsResultLocalGatewayVirtualInterfaceGroups extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    localGatewayVirtualInterfaceIds?: string[];
    ownerId?: string;
    tags?: DescribeLocalGatewayVirtualInterfaceGroupsResultLocalGatewayVirtualInterfaceGroupsTags[];
}
/**
 * Success
 */
export declare class DescribeLocalGatewayVirtualInterfaceGroupsResult extends SpeakeasyBase {
    localGatewayVirtualInterfaceGroups?: DescribeLocalGatewayVirtualInterfaceGroupsResultLocalGatewayVirtualInterfaceGroups[];
    nextToken?: string;
}
