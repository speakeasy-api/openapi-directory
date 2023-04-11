import { SpeakeasyBase } from "../../../internal/utils";
import { BuildPhaseTypeEnum } from "./buildphasetypeenum";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Information about a stage for a build.
 */
export declare class BuildPhase extends SpeakeasyBase {
    contexts?: PhaseContext[];
    durationInSeconds?: number;
    endTime?: Date;
    phaseStatus?: StatusTypeEnum;
    phaseType?: BuildPhaseTypeEnum;
    startTime?: Date;
}
