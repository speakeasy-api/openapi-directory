package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimeOffRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public TimeOffRequestInput withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approval_date")
    public String approvalDate;
    public TimeOffRequestInput withApprovalDate(String approvalDate) {
        this.approvalDate = approvalDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public TimeOffRequestInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public TimeOffRequestInput withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public String endDate;
    public TimeOffRequestInput withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public TimeOffRequestNotes notes;
    public TimeOffRequestInput withNotes(TimeOffRequestNotes notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy_id")
    public String policyId;
    public TimeOffRequestInput withPolicyId(String policyId) {
        this.policyId = policyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_date")
    public String requestDate;
    public TimeOffRequestInput withRequestDate(String requestDate) {
        this.requestDate = requestDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_type")
    public TimeOffRequestRequestTypeEnum requestType;
    public TimeOffRequestInput withRequestType(TimeOffRequestRequestTypeEnum requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public String startDate;
    public TimeOffRequestInput withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TimeOffRequestStatusEnum status;
    public TimeOffRequestInput withStatus(TimeOffRequestStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public TimeOffRequestUnitsEnum units;
    public TimeOffRequestInput withUnits(TimeOffRequestUnitsEnum units) {
        this.units = units;
        return this;
    }
}