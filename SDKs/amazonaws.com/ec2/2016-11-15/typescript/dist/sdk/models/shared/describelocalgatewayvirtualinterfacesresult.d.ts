import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewayVirtualInterfacesResultLocalGatewayVirtualInterfacesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a local gateway virtual interface.
 */
export declare class DescribeLocalGatewayVirtualInterfacesResultLocalGatewayVirtualInterfaces extends SpeakeasyBase {
    localAddress?: string;
    localBgpAsn?: number;
    localGatewayId?: string;
    localGatewayVirtualInterfaceId?: string;
    ownerId?: string;
    peerAddress?: string;
    peerBgpAsn?: number;
    tags?: DescribeLocalGatewayVirtualInterfacesResultLocalGatewayVirtualInterfacesTags[];
    vlan?: number;
}
/**
 * Success
 */
export declare class DescribeLocalGatewayVirtualInterfacesResult extends SpeakeasyBase {
    localGatewayVirtualInterfaces?: DescribeLocalGatewayVirtualInterfacesResultLocalGatewayVirtualInterfaces[];
    nextToken?: string;
}
