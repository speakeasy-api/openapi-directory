import { SpeakeasyBase } from "../../../internal/utils";
import { SamplingTargetDocument } from "./samplingtargetdocument";
import { UnprocessedStatistics } from "./unprocessedstatistics";
/**
 * Success
 */
export declare class GetSamplingTargetsResult extends SpeakeasyBase {
    lastRuleModification?: Date;
    samplingTargetDocuments?: SamplingTargetDocument[];
    unprocessedStatistics?: UnprocessedStatistics[];
}
