import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The overall resiliency score, returned as an object that includes the disruption score and outage score.
 */
export declare class ResiliencyScore extends SpeakeasyBase {
    disruptionScore: Record<string, number>;
    score: number;
}
