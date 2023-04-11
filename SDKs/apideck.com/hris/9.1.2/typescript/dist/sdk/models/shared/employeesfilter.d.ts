import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Employment status to filter on
 */
export declare enum EmployeesFilterEmploymentStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Terminated = "terminated",
    Other = "other"
}
/**
 * Apply filters
 */
export declare class EmployeesFilter extends SpeakeasyBase {
    /**
     * Company ID to filter on
     */
    companyId?: string;
    /**
     * ID of the department to filter on
     */
    departmentId?: string;
    /**
     * Email to filter on
     */
    email?: string;
    /**
     * Employee number to filter on
     */
    employeeNumber?: string;
    /**
     * Employment status to filter on
     */
    employmentStatus?: EmployeesFilterEmploymentStatusEnum;
    /**
     * First Name to filter on
     */
    firstName?: string;
    /**
     * Last Name to filter on
     */
    lastName?: string;
    /**
     * Manager id to filter on
     */
    managerId?: string;
    /**
     * Job title to filter on
     */
    title?: string;
}
