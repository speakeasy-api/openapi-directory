import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the route table.
**/
export declare class CreateRouteTableResultRouteTable extends SpeakeasyBase {
    associations?: Record<string, any>;
    ownerId?: Record<string, any>;
    propagatingVgws?: Record<string, any>;
    routeTableId?: Record<string, any>;
    routes?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class CreateRouteTableResult extends SpeakeasyBase {
    routeTable?: CreateRouteTableResultRouteTable;
}
