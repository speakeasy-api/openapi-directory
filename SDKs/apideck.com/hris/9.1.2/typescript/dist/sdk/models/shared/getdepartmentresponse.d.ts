import { SpeakeasyBase } from "../../../internal/utils";
import { Department } from "./department";
/**
 * Departments
 */
export declare class GetDepartmentResponse extends SpeakeasyBase {
    data: Department;
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
