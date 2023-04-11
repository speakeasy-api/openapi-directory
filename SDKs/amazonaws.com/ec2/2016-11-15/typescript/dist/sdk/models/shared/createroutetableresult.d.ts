import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the association.
 */
export declare enum CreateRouteTableResultRouteTableAssociationsAssociationStateStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated",
    Failed = "failed"
}
/**
 * The state of the association.
 */
export declare class CreateRouteTableResultRouteTableAssociationsAssociationState extends SpeakeasyBase {
    state?: CreateRouteTableResultRouteTableAssociationsAssociationStateStateEnum;
    statusMessage?: string;
}
/**
 * Describes an association between a route table and a subnet or gateway.
 */
export declare class CreateRouteTableResultRouteTableAssociations extends SpeakeasyBase {
    associationState?: CreateRouteTableResultRouteTableAssociationsAssociationState;
    gatewayId?: string;
    main?: boolean;
    routeTableAssociationId?: string;
    routeTableId?: string;
    subnetId?: string;
}
/**
 * Describes a virtual private gateway propagating route.
 */
export declare class CreateRouteTableResultRouteTablePropagatingVgws extends SpeakeasyBase {
    gatewayId?: string;
}
/**
 * <p>Describes how the route was created.</p> <ul> <li> <p> <code>CreateRouteTable</code> - The route was automatically created when the route table was created.</p> </li> <li> <p> <code>CreateRoute</code> - The route was manually added to the route table.</p> </li> <li> <p> <code>EnableVgwRoutePropagation</code> - The route was propagated by route propagation.</p> </li> </ul>
 */
export declare enum CreateRouteTableResultRouteTableRoutesOriginEnum {
    CreateRouteTable = "CreateRouteTable",
    CreateRoute = "CreateRoute",
    EnableVgwRoutePropagation = "EnableVgwRoutePropagation"
}
/**
 * The state of the route. The <code>blackhole</code> state indicates that the route's target isn't available (for example, the specified gateway isn't attached to the VPC, or the specified NAT instance has been terminated).
 */
export declare enum CreateRouteTableResultRouteTableRoutesStateEnum {
    Active = "active",
    Blackhole = "blackhole"
}
/**
 * Describes a route in a route table.
 */
export declare class CreateRouteTableResultRouteTableRoutes extends SpeakeasyBase {
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
    origin?: CreateRouteTableResultRouteTableRoutesOriginEnum;
    state?: CreateRouteTableResultRouteTableRoutesStateEnum;
    transitGatewayId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateRouteTableResultRouteTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the route table.
 */
export declare class CreateRouteTableResultRouteTable extends SpeakeasyBase {
    associations?: CreateRouteTableResultRouteTableAssociations[];
    ownerId?: string;
    propagatingVgws?: CreateRouteTableResultRouteTablePropagatingVgws[];
    routeTableId?: string;
    routes?: CreateRouteTableResultRouteTableRoutes[];
    tags?: CreateRouteTableResultRouteTableTags[];
    vpcId?: string;
}
/**
 * Success
 */
export declare class CreateRouteTableResult extends SpeakeasyBase {
    routeTable?: CreateRouteTableResultRouteTable;
}
