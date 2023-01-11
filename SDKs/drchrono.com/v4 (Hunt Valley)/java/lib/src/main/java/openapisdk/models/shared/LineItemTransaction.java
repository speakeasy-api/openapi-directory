package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LineItemTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public Double adjustment;
    public LineItemTransaction withAdjustment(Double adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment_group_code")
    public LineItemTransactionAdjustmentGroupCodeEnum adjustmentGroupCode;
    public LineItemTransaction withAdjustmentGroupCode(LineItemTransactionAdjustmentGroupCodeEnum adjustmentGroupCode) {
        this.adjustmentGroupCode = adjustmentGroupCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment_reason")
    public LineItemTransactionAdjustmentReasonEnum adjustmentReason;
    public LineItemTransaction withAdjustmentReason(LineItemTransactionAdjustmentReasonEnum adjustmentReason) {
        this.adjustmentReason = adjustmentReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public Long appointment;
    public LineItemTransaction withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_date")
    public String checkDate;
    public LineItemTransaction withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claim_status")
    public LineItemTransactionClaimStatusEnum claimStatus;
    public LineItemTransaction withClaimStatus(LineItemTransactionClaimStatusEnum claimStatus) {
        this.claimStatus = claimStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public LineItemTransaction withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public Long doctor;
    public LineItemTransaction withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public LineItemTransaction withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins_name")
    public Long insName;
    public LineItemTransaction withInsName(Long insName) {
        this.insName = insName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins_paid")
    public Double insPaid;
    public LineItemTransaction withInsPaid(Double insPaid) {
        this.insPaid = insPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_item")
    public Long lineItem;
    public LineItemTransaction withLineItem(Long lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public Long patient;
    public LineItemTransaction withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posted_date")
    public String postedDate;
    public LineItemTransaction withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trace_number")
    public String traceNumber;
    public LineItemTransaction withTraceNumber(String traceNumber) {
        this.traceNumber = traceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public LineItemTransaction withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}