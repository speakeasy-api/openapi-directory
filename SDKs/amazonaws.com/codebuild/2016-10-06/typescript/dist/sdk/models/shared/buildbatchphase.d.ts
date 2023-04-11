import { SpeakeasyBase } from "../../../internal/utils";
import { BuildBatchPhaseTypeEnum } from "./buildbatchphasetypeenum";
import { PhaseContext } from "./phasecontext";
import { StatusTypeEnum } from "./statustypeenum";
/**
 * Contains information about a stage for a batch build.
 */
export declare class BuildBatchPhase extends SpeakeasyBase {
    contexts?: PhaseContext[];
    durationInSeconds?: number;
    endTime?: Date;
    phaseStatus?: StatusTypeEnum;
    phaseType?: BuildBatchPhaseTypeEnum;
    startTime?: Date;
}
