import { SpeakeasyBase } from "../../../internal/utils";
import { Payroll } from "./payroll";
/**
 * Payrolls
 */
export declare class GetPayrollsResponse extends SpeakeasyBase {
    data: Payroll[];
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
