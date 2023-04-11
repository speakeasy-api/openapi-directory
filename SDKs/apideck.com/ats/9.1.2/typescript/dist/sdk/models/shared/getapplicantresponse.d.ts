import { SpeakeasyBase } from "../../../internal/utils";
import { Applicant } from "./applicant";
/**
 * Applicants
 */
export declare class GetApplicantResponse extends SpeakeasyBase {
    data: Applicant;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
