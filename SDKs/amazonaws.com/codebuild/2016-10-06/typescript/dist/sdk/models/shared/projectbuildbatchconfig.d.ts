import { SpeakeasyBase } from "../../../internal/utils";
import { BatchReportModeTypeEnum } from "./batchreportmodetypeenum";
import { BatchRestrictions } from "./batchrestrictions";
/**
 * Contains configuration information about a batch build project.
 */
export declare class ProjectBuildBatchConfig extends SpeakeasyBase {
    batchReportMode?: BatchReportModeTypeEnum;
    combineArtifacts?: boolean;
    restrictions?: BatchRestrictions;
    serviceRole?: string;
    timeoutInMins?: number;
}
