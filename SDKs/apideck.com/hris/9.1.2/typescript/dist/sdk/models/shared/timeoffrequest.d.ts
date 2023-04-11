import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeOffRequestNotes extends SpeakeasyBase {
    employee?: string;
    manager?: string;
}
/**
 * The type of request
 */
export declare enum TimeOffRequestRequestTypeEnum {
    Vacation = "vacation",
    Sick = "sick",
    Personal = "personal",
    JuryDuty = "jury_duty",
    Volunteer = "volunteer",
    Bereavement = "bereavement",
    Other = "other"
}
/**
 * The status of the time off request.
 */
export declare enum TimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}
/**
 * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
 */
export declare enum TimeOffRequestUnitsEnum {
    Days = "days",
    Hours = "hours",
    Other = "other"
}
export declare class TimeOffRequestInput extends SpeakeasyBase {
    /**
     * The amount of time off requested.
     */
    amount?: number;
    /**
     * The date the request was approved
     */
    approvalDate?: string;
    /**
     * Description of the time off request.
     */
    description?: string;
    /**
     * ID of the employee
     */
    employeeId?: string;
    /**
     * The end date of the time off request.
     */
    endDate?: string;
    notes?: TimeOffRequestNotes;
    /**
     * ID of the policy
     */
    policyId?: string;
    /**
     * The date the request was made.
     */
    requestDate?: string;
    /**
     * The type of request
     */
    requestType?: TimeOffRequestRequestTypeEnum;
    /**
     * The start date of the time off request.
     */
    startDate?: string;
    /**
     * The status of the time off request.
     */
    status?: TimeOffRequestStatusEnum;
    /**
     * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
     */
    units?: TimeOffRequestUnitsEnum;
}
export declare class TimeOffRequest extends SpeakeasyBase {
    /**
     * The amount of time off requested.
     */
    amount?: number;
    /**
     * The date the request was approved
     */
    approvalDate?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * Description of the time off request.
     */
    description?: string;
    /**
     * ID of the employee
     */
    employeeId?: string;
    /**
     * The end date of the time off request.
     */
    endDate?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    notes?: TimeOffRequestNotes;
    /**
     * ID of the policy
     */
    policyId?: string;
    /**
     * The date the request was made.
     */
    requestDate?: string;
    /**
     * The type of request
     */
    requestType?: TimeOffRequestRequestTypeEnum;
    /**
     * The start date of the time off request.
     */
    startDate?: string;
    /**
     * The status of the time off request.
     */
    status?: TimeOffRequestStatusEnum;
    /**
     * The unit of time off requested. Possible values include: `hours`, `days`, or `other`.
     */
    units?: TimeOffRequestUnitsEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
