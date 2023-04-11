import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReusePolicy } from "./instancereusepolicy";
import { WarmPoolStateEnum } from "./warmpoolstateenum";
import { WarmPoolStatusEnum } from "./warmpoolstatusenum";
/**
 * Describes a warm pool configuration.
 */
export declare class WarmPoolConfiguration extends SpeakeasyBase {
    instanceReusePolicy?: InstanceReusePolicy;
    maxGroupPreparedCapacity?: number;
    minSize?: number;
    poolState?: WarmPoolStateEnum;
    status?: WarmPoolStatusEnum;
}
