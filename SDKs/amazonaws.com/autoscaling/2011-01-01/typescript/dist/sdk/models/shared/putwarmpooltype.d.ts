import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceReusePolicy } from "./instancereusepolicy";
import { WarmPoolStateEnum } from "./warmpoolstateenum";
export declare class PutWarmPoolType extends SpeakeasyBase {
    autoScalingGroupName: string;
    instanceReusePolicy?: InstanceReusePolicy;
    maxGroupPreparedCapacity?: number;
    minSize?: number;
    poolState?: WarmPoolStateEnum;
}
