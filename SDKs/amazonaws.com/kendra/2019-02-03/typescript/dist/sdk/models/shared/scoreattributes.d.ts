import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreConfidenceEnum } from "./scoreconfidenceenum";
/**
 * Provides a relative ranking that indicates how confident Amazon Kendra is that the response matches the query.
 */
export declare class ScoreAttributes extends SpeakeasyBase {
    scoreConfidence?: ScoreConfidenceEnum;
}
