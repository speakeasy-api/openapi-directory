import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The CVSS score for a finding.
 */
export declare class CvssScore extends SpeakeasyBase {
    baseScore: number;
    scoringVector: string;
    source: string;
    version: string;
}
