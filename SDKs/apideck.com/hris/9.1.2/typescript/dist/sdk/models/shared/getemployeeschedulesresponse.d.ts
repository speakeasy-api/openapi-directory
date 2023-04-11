import { SpeakeasyBase } from "../../../internal/utils";
import { EmployeeSchedules } from "./employeeschedules";
/**
 * EmployeeSchedules
 */
export declare class GetEmployeeSchedulesResponse extends SpeakeasyBase {
    data: EmployeeSchedules;
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
