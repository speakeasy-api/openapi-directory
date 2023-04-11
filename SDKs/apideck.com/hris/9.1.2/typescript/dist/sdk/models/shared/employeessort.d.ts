import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Employees
 */
export declare enum EmployeesSortByEnum {
    FirstName = "first_name",
    LastName = "last_name",
    CreatedAt = "created_at",
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class EmployeesSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Employees
     */
    by?: EmployeesSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
