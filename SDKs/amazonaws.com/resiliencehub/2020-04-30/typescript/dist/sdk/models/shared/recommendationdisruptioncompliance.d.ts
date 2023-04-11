import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStatusEnum } from "./compliancestatusenum";
/**
 * Defines a disruption compliance recommendation.
 */
export declare class RecommendationDisruptionCompliance extends SpeakeasyBase {
    expectedComplianceStatus: ComplianceStatusEnum;
    expectedRpoDescription?: string;
    expectedRpoInSecs?: number;
    expectedRtoDescription?: string;
    expectedRtoInSecs?: number;
}
