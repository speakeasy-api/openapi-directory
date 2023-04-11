import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingModeEnum } from "./scalingmodeenum";
/**
 * Contains information about a dedicated IP pool.
 */
export declare class DedicatedIpPool extends SpeakeasyBase {
    poolName: string;
    scalingMode: ScalingModeEnum;
}
