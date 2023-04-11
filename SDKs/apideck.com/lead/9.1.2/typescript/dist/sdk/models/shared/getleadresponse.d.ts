import { SpeakeasyBase } from "../../../internal/utils";
import { Lead } from "./lead";
/**
 * Lead
 */
export declare class GetLeadResponse extends SpeakeasyBase {
    data: Lead;
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
