import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Failed to generate PDF
 */
export declare class ApiResponseFailure extends SpeakeasyBase {
    /**
     * The reason for the PDF generation failure
     */
    reason?: string;
    /**
     * Will be false if the operation failed
     */
    success?: boolean;
}
