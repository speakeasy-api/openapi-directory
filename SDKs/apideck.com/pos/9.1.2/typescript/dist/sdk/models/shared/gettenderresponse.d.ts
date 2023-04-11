import { SpeakeasyBase } from "../../../internal/utils";
import { Tender } from "./tender";
/**
 * Tenders
 */
export declare class GetTenderResponse extends SpeakeasyBase {
    data: Tender;
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
