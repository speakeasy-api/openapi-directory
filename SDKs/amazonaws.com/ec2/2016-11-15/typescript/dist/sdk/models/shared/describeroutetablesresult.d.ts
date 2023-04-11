import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
 */
export declare enum DescribeRouteTablesResultRouteTablesAssociationsAssociationStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failed = "failed"
}
/**
 * The state of the association.
 */
export declare class DescribeRouteTablesResultRouteTablesAssociationsAssociationState extends SpeakeasyBase {
    state?: DescribeRouteTablesResultRouteTablesAssociationsAssociationStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an association between a route table and a subnet or gateway.
 */
export declare class DescribeRouteTablesResultRouteTablesAssociations extends SpeakeasyBase {
    associationState?: DescribeRouteTablesResultRouteTablesAssociationsAssociationState;
    gatewayId?: string;
    main?: boolean;
    routeTableAssociationId?: string;
    routeTableId?: string;
    subnetId?: string;
}
/**
 * Describes a virtual private gateway propagating route.
 */
export declare class DescribeRouteTablesResultRouteTablesPropagatingVgws extends SpeakeasyBase {
    gatewayId?: string;
}
/**
 * <p>Describes how the route was created.</p> <ul> <li> <p> <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p> </li> <li> <p> <code>CreateRoute</code> - The route was manually added to the route table.</p> </li> <li> <p> <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p> </li> </ul>
 */
export declare enum DescribeRouteTablesResultRouteTablesRoutesOriginEnum {
    CreateRouteTable = "CreateRouteTable",
    CreateRoute = "CreateRoute",
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}
/**
 * The state of the route. The <code>blackhole</code> state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, or the specified NAT instance has been terminated).
 */
export declare enum DescribeRouteTablesResultRouteTablesRoutesStateEnum {
    Active = "active",
    Blackhole = "blackhole"
}
/**
 * Describes a route in a route table.
 */
export declare class DescribeRouteTablesResultRouteTablesRoutes extends SpeakeasyBase {
    carrierGatewayId?: string;
    coreNetworkArn?: string;
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    egressOnlyInternetGatewayId?: string;
    gatewayId?: string;
    instanceId?: string;
    instanceOwnerId?: string;
    localGatewayId?: string;
    natGatewayId?: string;
    networkInterfaceId?: string;
    origin?: DescribeRouteTablesResultRouteTablesRoutesOriginEnum;
    state?: DescribeRouteTablesResultRouteTablesRoutesStateEnum;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a tag.
 */
export declare class DescribeRouteTablesResultRouteTablesTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a route table.
 */
export declare class DescribeRouteTablesResultRouteTables extends SpeakeasyBase {
    associations?: DescribeRouteTablesResultRouteTablesAssociations[];
    ownerId?: string;
    propagatingVgws?: DescribeRouteTablesResultRouteTablesPropagatingVgws[];
    routeTableId?: string;
    routes?: DescribeRouteTablesResultRouteTablesRoutes[];
    tags?: DescribeRouteTablesResultRouteTablesTags[];
    vpcId?: string;
}
/**
 * Contains the output of DescribeRouteTables.
 */
export declare class DescribeRouteTablesResult extends SpeakeasyBase {
    nextToken?: string;
    routeTables?: DescribeRouteTablesResultRouteTables[];
}
