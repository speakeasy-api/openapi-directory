import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Quantifies the anomaly. The higher score means that it's more anomalous.
 */
export declare class AnomalyScore extends SpeakeasyBase {
    currentScore: number;
    maxScore: number;
}
