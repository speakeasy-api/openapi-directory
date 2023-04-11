import { SpeakeasyBase } from "../../../internal/utils";
import { DriftCheckBias } from "./driftcheckbias";
import { DriftCheckExplainability } from "./driftcheckexplainability";
import { DriftCheckModelDataQuality } from "./driftcheckmodeldataquality";
import { DriftCheckModelQuality } from "./driftcheckmodelquality";
/**
 * Represents the drift check baselines that can be used when the model monitor is set using the model package.
 */
export declare class DriftCheckBaselines extends SpeakeasyBase {
    bias?: DriftCheckBias;
    explainability?: DriftCheckExplainability;
    modelDataQuality?: DriftCheckModelDataQuality;
    modelQuality?: DriftCheckModelQuality;
}
