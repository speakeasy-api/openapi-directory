import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeePayroll } from "./employeepayroll";
/**
 * Payrolls
 */
export declare class GetEmployeePayrollResponse extends SpeakeasyBase {
    data: EmployeePayroll;
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
