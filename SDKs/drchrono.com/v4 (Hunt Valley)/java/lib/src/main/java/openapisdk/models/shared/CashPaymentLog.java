package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CashPaymentLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public CashPaymentLogActionEnum action;
    public CashPaymentLog withAction(CashPaymentLogActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public CashPaymentLog withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appointment")
    public String appointment;
    public CashPaymentLog withAppointment(String appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public CashPaymentLog withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public String doctor;
    public CashPaymentLog withDoctor(String doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public CashPaymentLog withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public CashPaymentLog withPatient(String patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_method")
    public CashPaymentLogPaymentMethodEnum paymentMethod;
    public CashPaymentLog withPaymentMethod(CashPaymentLogPaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public CashPaymentLog withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public CashPaymentLog withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}