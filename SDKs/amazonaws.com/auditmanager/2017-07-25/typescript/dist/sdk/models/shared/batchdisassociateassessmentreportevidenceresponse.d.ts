import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportEvidenceError } from "./assessmentreportevidenceerror";
/**
 * Success
 */
export declare class BatchDisassociateAssessmentReportEvidenceResponse extends SpeakeasyBase {
    errors?: AssessmentReportEvidenceError[];
    evidenceIds?: string[];
}
