package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EobObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_date")
    public String checkDate;
    public EobObject withCheckDate(String checkDate) {
        this.checkDate = checkDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deposit_date")
    public String depositDate;
    public EobObject withDepositDate(String depositDate) {
        this.depositDate = depositDate;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public EobObject withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public EobObject withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("insurance_payer_id")
    public String insurancePayerId;
    public EobObject withInsurancePayerId(String insurancePayerId) {
        this.insurancePayerId = insurancePayerId;
        return this;
    }
    @JsonProperty("insurance_payer_name")
    public String insurancePayerName;
    public EobObject withInsurancePayerName(String insurancePayerName) {
        this.insurancePayerName = insurancePayerName;
        return this;
    }
    @JsonProperty("insurance_payer_trace_number")
    public String insurancePayerTraceNumber;
    public EobObject withInsurancePayerTraceNumber(String insurancePayerTraceNumber) {
        this.insurancePayerTraceNumber = insurancePayerTraceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_method")
    public EobObjectPaymentMethodEnum paymentMethod;
    public EobObject withPaymentMethod(EobObjectPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posted_date")
    public String postedDate;
    public EobObject withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scanned_eob")
    public String scannedEob;
    public EobObject withScannedEob(String scannedEob) {
        this.scannedEob = scannedEob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_paid")
    public Double totalPaid;
    public EobObject withTotalPaid(Double totalPaid) {
        this.totalPaid = totalPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public EobObject withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}