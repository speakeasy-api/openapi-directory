import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode of the local gateway route table.
 */
export declare enum CreateLocalGatewayRouteTableResultLocalGatewayRouteTableModeEnum {
    DirectVpcRouting = "direct-vpc-routing",
    Coip = "coip"
}
/**
 * Information about the state change.
 */
export declare class CreateLocalGatewayRouteTableResultLocalGatewayRouteTableStateReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class CreateLocalGatewayRouteTableResultLocalGatewayRouteTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the local gateway route table.
 */
export declare class CreateLocalGatewayRouteTableResultLocalGatewayRouteTable extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    mode?: CreateLocalGatewayRouteTableResultLocalGatewayRouteTableModeEnum;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    stateReason?: CreateLocalGatewayRouteTableResultLocalGatewayRouteTableStateReason;
    tags?: CreateLocalGatewayRouteTableResultLocalGatewayRouteTableTags[];
}
/**
 * Success
 */
export declare class CreateLocalGatewayRouteTableResult extends SpeakeasyBase {
    localGatewayRouteTable?: CreateLocalGatewayRouteTableResultLocalGatewayRouteTable;
}
