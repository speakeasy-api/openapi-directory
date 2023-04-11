import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeePayrolls } from "./employeepayrolls";
/**
 * EmployeePayrolls
 */
export declare class GetEmployeePayrollsResponse extends SpeakeasyBase {
    data: EmployeePayrolls;
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
