package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CashPayment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public CashPayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public Long appointment;
    public CashPayment withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public CashPayment withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public CashPayment withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public Long doctor;
    public CashPayment withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CashPayment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_item")
    public Long lineItem;
    public CashPayment withLineItem(Long lineItem) {
        this.lineItem = lineItem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public CashPayment withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public CashPayment withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_method")
    public CashPaymentPaymentMethodEnum paymentMethod;
    public CashPayment withPaymentMethod(CashPaymentPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_transaction_type")
    public CashPaymentPaymentTransactionTypeEnum paymentTransactionType;
    public CashPayment withPaymentTransactionType(CashPaymentPaymentTransactionTypeEnum paymentTransactionType) {
        this.paymentTransactionType = paymentTransactionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posted_date")
    public String postedDate;
    public CashPayment withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received_date")
    public String receivedDate;
    public CashPayment withReceivedDate(String receivedDate) {
        this.receivedDate = receivedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trace_number")
    public String traceNumber;
    public CashPayment withTraceNumber(String traceNumber) {
        this.traceNumber = traceNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public CashPayment withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}