import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details produced as a result of performing known fraudster risk analysis on a speaker.
 */
export declare class KnownFraudsterRisk extends SpeakeasyBase {
    generatedFraudsterId?: string;
    riskScore: number;
}
