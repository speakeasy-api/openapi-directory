import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode of the local gateway route table.
 */
export declare enum DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableModeEnum {
    DirectVpcRouting = "direct-vpc-routing",
    Coip = "coip"
}
/**
 * Information about the state change.
 */
export declare class DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableStateReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Describes a tag.
 */
export declare class DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the local gateway route table.
 */
export declare class DeleteLocalGatewayRouteTableResultLocalGatewayRouteTable extends SpeakeasyBase {
    localGatewayId?: string;
    localGatewayRouteTableArn?: string;
    localGatewayRouteTableId?: string;
    mode?: DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableModeEnum;
    outpostArn?: string;
    ownerId?: string;
    state?: string;
    stateReason?: DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableStateReason;
    tags?: DeleteLocalGatewayRouteTableResultLocalGatewayRouteTableTags[];
}
/**
 * Success
 */
export declare class DeleteLocalGatewayRouteTableResult extends SpeakeasyBase {
    localGatewayRouteTable?: DeleteLocalGatewayRouteTableResultLocalGatewayRouteTable;
}
