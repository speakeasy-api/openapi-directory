import { SpeakeasyBase } from "../../../internal/utils";
import { EmploymentStatusEnum } from "./employmentstatusenum";
export declare class HrisJobLocation extends SpeakeasyBase {
    name?: string;
}
export declare class HrisJob extends SpeakeasyBase {
    /**
     * Department name
     */
    department?: string;
    /**
     * Id of the employee
     */
    employeeId?: string;
    /**
     * The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.
     */
    employmentStatus?: EmploymentStatusEnum;
    endDate?: Date;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Indicates whether this the employee's primary job.
     */
    isPrimary?: boolean;
    location?: HrisJobLocation;
    startDate?: Date;
    /**
     * The job title of the person.
     */
    title?: string;
}
