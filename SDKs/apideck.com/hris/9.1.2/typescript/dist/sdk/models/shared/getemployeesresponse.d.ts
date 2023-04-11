import { SpeakeasyBase } from "../../../internal/utils";
import { Employee } from "./employee";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Employees
 */
export declare class GetEmployeesResponse extends SpeakeasyBase {
    data: Employee[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
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
