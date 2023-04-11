import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackComplianceScore } from "./conformancepackcompliancescore";
/**
 * Success
 */
export declare class ListConformancePackComplianceScoresResponse extends SpeakeasyBase {
    conformancePackComplianceScores: ConformancePackComplianceScore[];
    nextToken?: string;
}
