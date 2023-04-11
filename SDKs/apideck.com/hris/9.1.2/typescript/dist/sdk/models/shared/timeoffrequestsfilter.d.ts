import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time off request status to filter on
 */
export declare enum TimeOffRequestsFilterTimeOffRequestStatusEnum {
    Requested = "requested",
    Approved = "approved",
    Declined = "declined",
    Cancelled = "cancelled",
    Deleted = "deleted",
    Other = "other"
}
/**
 * Apply filters
 */
export declare class TimeOffRequestsFilter extends SpeakeasyBase {
    /**
     * Employee ID
     */
    employeeId?: string;
    /**
     * End date
     */
    endDate?: string;
    /**
     * Start date
     */
    startDate?: string;
    /**
     * Time off request status to filter on
     */
    timeOffRequestStatus?: TimeOffRequestsFilterTimeOffRequestStatusEnum;
}
