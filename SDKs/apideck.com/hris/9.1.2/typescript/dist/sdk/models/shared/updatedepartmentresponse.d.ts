import { SpeakeasyBase } from "../../../internal/utils";
import { UnifiedId } from "./unifiedid";
/**
 * Departments
 */
export declare class UpdateDepartmentResponse extends SpeakeasyBase {
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
