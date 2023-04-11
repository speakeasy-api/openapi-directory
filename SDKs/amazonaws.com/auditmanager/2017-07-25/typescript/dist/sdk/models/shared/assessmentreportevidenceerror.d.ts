import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message.
 */
export declare class AssessmentReportEvidenceError extends SpeakeasyBase {
    errorCode?: string;
    errorMessage?: string;
    evidenceId?: string;
}
