import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedId } from "./unifiedid";
/**
 * Activity deleted
 */
export declare class DeleteActivityResponse extends SpeakeasyBase {
    data: UnifiedId;
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
