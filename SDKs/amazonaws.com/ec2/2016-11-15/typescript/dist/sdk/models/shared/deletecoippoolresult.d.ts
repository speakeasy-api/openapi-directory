import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteCoipPoolResultCoipPoolTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the CoIP address pool.
 */
export declare class DeleteCoipPoolResultCoipPool extends SpeakeasyBase {
    localGatewayRouteTableId?: string;
    poolArn?: string;
    poolCidrs?: string[];
    poolId?: string;
    tags?: DeleteCoipPoolResultCoipPoolTags[];
}
/**
 * Success
 */
export declare class DeleteCoipPoolResult extends SpeakeasyBase {
    coipPool?: DeleteCoipPoolResultCoipPool;
}
