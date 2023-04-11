import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeLocalGatewayRouteTableVpcAssociationsResultLocalGatewayRouteTableVpcAssociationsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes an association between a local gateway route table and a VPC.
 */
export declare class DescribeLocalGatewayRouteTableVpcAssociationsResultLocalGatewayRouteTableVpcAssociations extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    localGatewayRouteTableVpcAssociationId?: string;
    ownerId?: string;
    state?: string;
    tags?: DescribeLocalGatewayRouteTableVpcAssociationsResultLocalGatewayRouteTableVpcAssociationsTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeLocalGatewayRouteTableVpcAssociationsResult extends SpeakeasyBase {
    localGatewayRouteTableVpcAssociations?: DescribeLocalGatewayRouteTableVpcAssociationsResultLocalGatewayRouteTableVpcAssociations[];
    nextToken?: string;
}
