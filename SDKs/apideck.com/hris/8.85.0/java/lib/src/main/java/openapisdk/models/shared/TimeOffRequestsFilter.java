package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class TimeOffRequestsFilter {
    @SpeakeasyMetadata("queryParam:name=employee_id")
    public String employeeId;
    public TimeOffRequestsFilter withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=end_date")
    public String endDate;
    public TimeOffRequestsFilter withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=start_date")
    public String startDate;
    public TimeOffRequestsFilter withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=time_off_request_status")
    public TimeOffRequestsFilterTimeOffRequestStatusEnum timeOffRequestStatus;
    public TimeOffRequestsFilter withTimeOffRequestStatus(TimeOffRequestsFilterTimeOffRequestStatusEnum timeOffRequestStatus) {
        this.timeOffRequestStatus = timeOffRequestStatus;
        return this;
    }
}