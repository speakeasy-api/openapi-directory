import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ValidateAssessmentReportIntegrityResponse extends SpeakeasyBase {
    signatureAlgorithm?: string;
    signatureDateTime?: string;
    signatureKeyId?: string;
    signatureValid?: boolean;
    validationErrors?: string[];
}
