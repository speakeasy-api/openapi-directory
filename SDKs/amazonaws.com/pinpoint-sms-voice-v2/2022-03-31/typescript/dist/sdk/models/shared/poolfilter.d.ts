import { SpeakeasyBase } from "../../../internal/utils";
import { PoolFilterNameEnum } from "./poolfilternameenum";
/**
 * The information for a pool that meets a specified criteria.
 */
export declare class PoolFilter extends SpeakeasyBase {
    name: PoolFilterNameEnum;
    values: string[];
}
