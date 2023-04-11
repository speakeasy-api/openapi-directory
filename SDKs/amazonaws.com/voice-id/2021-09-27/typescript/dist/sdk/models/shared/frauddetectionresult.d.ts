import { SpeakeasyBase } from "../../../internal/utils";
import { FraudDetectionConfiguration } from "./frauddetectionconfiguration";
import { FraudDetectionDecisionEnum } from "./frauddetectiondecisionenum";
import { FraudDetectionReasonEnum } from "./frauddetectionreasonenum";
import { FraudRiskDetails } from "./fraudriskdetails";
/**
 * The fraud detection result produced by Voice ID, processed against the current session state and streamed audio of the speaker.
 */
export declare class FraudDetectionResult extends SpeakeasyBase {
    audioAggregationEndedAt?: Date;
    audioAggregationStartedAt?: Date;
    configuration?: FraudDetectionConfiguration;
    decision?: FraudDetectionDecisionEnum;
    fraudDetectionResultId?: string;
    reasons?: FraudDetectionReasonEnum[];
    riskDetails?: FraudRiskDetails;
}
