import { SpeakeasyBase } from "../../../internal/utils";
import { Opportunity } from "./opportunity";
/**
 * Opportunity
 */
export declare class GetOpportunityResponse extends SpeakeasyBase {
    data: Opportunity;
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
