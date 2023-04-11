import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLCandidateGenerationConfig } from "./automlcandidategenerationconfig";
import { AutoMLDataSplitConfig } from "./automldatasplitconfig";
import { AutoMLJobCompletionCriteria } from "./automljobcompletioncriteria";
import { AutoMLModeEnum } from "./automlmodeenum";
import { AutoMLSecurityConfig } from "./automlsecurityconfig";
/**
 * A collection of settings used for an AutoML job.
 */
export declare class AutoMLJobConfig extends SpeakeasyBase {
    candidateGenerationConfig?: AutoMLCandidateGenerationConfig;
    completionCriteria?: AutoMLJobCompletionCriteria;
    dataSplitConfig?: AutoMLDataSplitConfig;
    mode?: AutoMLModeEnum;
    securityConfig?: AutoMLSecurityConfig;
}
