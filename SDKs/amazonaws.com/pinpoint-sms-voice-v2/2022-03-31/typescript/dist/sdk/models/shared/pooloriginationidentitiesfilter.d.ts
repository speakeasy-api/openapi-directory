import { SpeakeasyBase } from "../../../internal/utils";
import { PoolOriginationIdentitiesFilterNameEnum } from "./pooloriginationidentitiesfilternameenum";
/**
 * Information about origination identities associated with a pool that meets a specified criteria.
 */
export declare class PoolOriginationIdentitiesFilter extends SpeakeasyBase {
    name: PoolOriginationIdentitiesFilterNameEnum;
    values: string[];
}
