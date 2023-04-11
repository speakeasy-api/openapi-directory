import { SpeakeasyBase } from "../../../internal/utils";
import { CvssScoreAdjustment } from "./cvssscoreadjustment";
/**
 * Information about the CVSS score.
 */
export declare class CvssScoreDetails extends SpeakeasyBase {
    adjustments?: CvssScoreAdjustment[];
    score?: number;
    scoreSource?: string;
    scoringVector?: string;
    version?: string;
}
