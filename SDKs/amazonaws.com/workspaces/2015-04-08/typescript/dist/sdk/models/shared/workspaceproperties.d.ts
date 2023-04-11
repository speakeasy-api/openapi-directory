import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEnum } from "./computeenum";
import { ProtocolEnum } from "./protocolenum";
import { RunningModeEnum } from "./runningmodeenum";
/**
 * Describes a WorkSpace.
 */
export declare class WorkspaceProperties extends SpeakeasyBase {
    computeTypeName?: ComputeEnum;
    protocols?: ProtocolEnum[];
    rootVolumeSizeGib?: number;
    runningMode?: RunningModeEnum;
    runningModeAutoStopTimeoutInMinutes?: number;
    userVolumeSizeGib?: number;
}
