import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an association between a local gateway route table and a virtual interface group.
 */
export declare class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResultLocalGatewayRouteTableVirtualInterfaceGroupAssociations extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVirtualInterfaceGroupAssociationId?: string;
    localGatewayVirtualInterfaceGroupId?: string;
    ownerId?: string;
    state?: string;
    tags?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationsTags[];
}
/**
 * Success
 */
export declare class DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult extends SpeakeasyBase {
    localGatewayRouteTableVirtualInterfaceGroupAssociations?: DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResultLocalGatewayRouteTableVirtualInterfaceGroupAssociations[];
    nextToken?: string;
}
