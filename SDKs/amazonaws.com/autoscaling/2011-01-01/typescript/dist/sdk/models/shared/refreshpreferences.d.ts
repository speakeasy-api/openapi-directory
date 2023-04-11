import { SpeakeasyBase } from "../../../internal/utils";
import { ScaleInProtectedInstancesEnum } from "./scaleinprotectedinstancesenum";
import { StandbyInstancesEnum } from "./standbyinstancesenum";
/**
 * Describes the preferences for an instance refresh.
 */
export declare class RefreshPreferences extends SpeakeasyBase {
    autoRollback?: boolean;
    checkpointDelay?: number;
    checkpointPercentages?: number[];
    instanceWarmup?: number;
    minHealthyPercentage?: number;
    scaleInProtectedInstances?: ScaleInProtectedInstancesEnum;
    skipMatching?: boolean;
    standbyInstances?: StandbyInstancesEnum;
}
