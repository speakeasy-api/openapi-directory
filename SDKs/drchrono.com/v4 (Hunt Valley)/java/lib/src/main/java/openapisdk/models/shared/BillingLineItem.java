package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingLineItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public Double adjustment;
    public BillingLineItem withAdjustment(Double adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed")
    public Double allowed;
    public BillingLineItem withAllowed(Double allowed) {
        this.allowed = allowed;
        return this;
    }
    @JsonProperty("appointment")
    public Long appointment;
    public BillingLineItem withAppointment(Long appointment) {
        this.appointment = appointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance_ins")
    public Double balanceIns;
    public BillingLineItem withBalanceIns(Double balanceIns) {
        this.balanceIns = balanceIns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance_pt")
    public Double balancePt;
    public BillingLineItem withBalancePt(Double balancePt) {
        this.balancePt = balancePt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("balance_total")
    public String balanceTotal;
    public BillingLineItem withBalanceTotal(String balanceTotal) {
        this.balanceTotal = balanceTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billed")
    public Double billed;
    public BillingLineItem withBilled(Double billed) {
        this.billed = billed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_status")
    public BillingLineItemBillingStatusEnum billingStatus;
    public BillingLineItem withBillingStatus(BillingLineItemBillingStatusEnum billingStatus) {
        this.billingStatus = billingStatus;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public BillingLineItem withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denied_flag")
    public Boolean deniedFlag;
    public BillingLineItem withDeniedFlag(Boolean deniedFlag) {
        this.deniedFlag = deniedFlag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BillingLineItem withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("diagnosis_pointers")
    public String[] diagnosisPointers;
    public BillingLineItem withDiagnosisPointers(String[] diagnosisPointers) {
        this.diagnosisPointers = diagnosisPointers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doctor")
    public String doctor;
    public BillingLineItem withDoctor(String doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expected_reimbursement")
    public Double expectedReimbursement;
    public BillingLineItem withExpectedReimbursement(Double expectedReimbursement) {
        this.expectedReimbursement = expectedReimbursement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public BillingLineItem withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins1_paid")
    public Double ins1Paid;
    public BillingLineItem withIns1Paid(Double ins1Paid) {
        this.ins1Paid = ins1Paid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins2_paid")
    public Double ins2Paid;
    public BillingLineItem withIns2Paid(Double ins2Paid) {
        this.ins2Paid = ins2Paid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins3_paid")
    public Double ins3Paid;
    public BillingLineItem withIns3Paid(Double ins3Paid) {
        this.ins3Paid = ins3Paid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins_total")
    public String insTotal;
    public BillingLineItem withInsTotal(String insTotal) {
        this.insTotal = insTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insurance_status")
    public String insuranceStatus;
    public BillingLineItem withInsuranceStatus(String insuranceStatus) {
        this.insuranceStatus = insuranceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiers")
    public String[] modifiers;
    public BillingLineItem withModifiers(String[] modifiers) {
        this.modifiers = modifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paid_total")
    public String paidTotal;
    public BillingLineItem withPaidTotal(String paidTotal) {
        this.paidTotal = paidTotal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patient")
    public String patient;
    public BillingLineItem withPatient(String patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("posted_date")
    public String postedDate;
    public BillingLineItem withPostedDate(String postedDate) {
        this.postedDate = postedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public Double price;
    public BillingLineItem withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("procedure_type")
    public BillingLineItemProcedureTypeEnum procedureType;
    public BillingLineItem withProcedureType(BillingLineItemProcedureTypeEnum procedureType) {
        this.procedureType = procedureType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pt_paid")
    public Double ptPaid;
    public BillingLineItem withPtPaid(Double ptPaid) {
        this.ptPaid = ptPaid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public BillingLineItem withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_date")
    public String serviceDate;
    public BillingLineItem withServiceDate(String serviceDate) {
        this.serviceDate = serviceDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public BillingLineItem withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public BillingLineItem withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}