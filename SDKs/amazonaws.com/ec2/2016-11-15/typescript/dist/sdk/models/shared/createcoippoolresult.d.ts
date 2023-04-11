import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateCoipPoolResultCoipPoolTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the CoIP address pool.
 */
export declare class CreateCoipPoolResultCoipPool extends SpeakeasyBase {
    localGatewayRouteTableId?: string;
    poolArn?: string;
    poolCidrs?: string[];
    poolId?: string;
    tags?: CreateCoipPoolResultCoipPoolTags[];
}
/**
 * Success
 */
export declare class CreateCoipPoolResult extends SpeakeasyBase {
    coipPool?: CreateCoipPoolResultCoipPool;
}
