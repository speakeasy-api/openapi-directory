import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration used for performing fraud detection over a speaker during a session.
 */
export declare class FraudDetectionConfiguration extends SpeakeasyBase {
    riskThreshold?: number;
    watchlistId?: string;
}
