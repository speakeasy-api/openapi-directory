package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientVaccineRecord {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administered_at")
    public Long administeredAt;
    public PatientVaccineRecord withAdministeredAt(Long administeredAt) {
        this.administeredAt = administeredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administered_by")
    public String administeredBy;
    public PatientVaccineRecord withAdministeredBy(String administeredBy) {
        this.administeredBy = administeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("administration_start")
    public String administrationStart;
    public PatientVaccineRecord withAdministrationStart(String administrationStart) {
        this.administrationStart = administrationStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Double amount;
    public PatientVaccineRecord withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public String comments;
    public PatientVaccineRecord withComments(String comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completion_status")
    public PatientVaccineRecordVaccinationStatusEnum completionStatus;
    public PatientVaccineRecord withCompletionStatus(PatientVaccineRecordVaccinationStatusEnum completionStatus) {
        this.completionStatus = completionStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consent_form")
    public Long consentForm;
    public PatientVaccineRecord withConsentForm(Long consentForm) {
        this.consentForm = consentForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpt_code")
    public String cptCode;
    public PatientVaccineRecord withCptCode(String cptCode) {
        this.cptCode = cptCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public PatientVaccineRecord withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("cvx_code")
    public String cvxCode;
    public PatientVaccineRecord withCvxCode(String cvxCode) {
        this.cvxCode = cvxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doses")
    public PatientVaccineRecordVaccineDose[] doses;
    public PatientVaccineRecord withDoses(PatientVaccineRecordVaccineDose[] doses) {
        this.doses = doses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entered_by")
    public String enteredBy;
    public PatientVaccineRecord withEnteredBy(String enteredBy) {
        this.enteredBy = enteredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_eligibility")
    public PatientVaccineRecordFundingEligibilityEnum fundingEligibility;
    public PatientVaccineRecord withFundingEligibility(PatientVaccineRecordFundingEligibilityEnum fundingEligibility) {
        this.fundingEligibility = fundingEligibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PatientVaccineRecord withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PatientVaccineRecord withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_dose_date")
    public String nextDoseDate;
    public PatientVaccineRecord withNextDoseDate(String nextDoseDate) {
        this.nextDoseDate = nextDoseDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observed_immunity")
    public PatientVaccineRecordObservedImmunityEnum observedImmunity;
    public PatientVaccineRecord withObservedImmunity(PatientVaccineRecordObservedImmunityEnum observedImmunity) {
        this.observedImmunity = observedImmunity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ordering_doctor")
    public Long orderingDoctor;
    public PatientVaccineRecord withOrderingDoctor(Long orderingDoctor) {
        this.orderingDoctor = orderingDoctor;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public PatientVaccineRecord withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_source")
    public PatientVaccineRecordRecordTypeEnum recordSource;
    public PatientVaccineRecord withRecordSource(PatientVaccineRecordRecordTypeEnum recordSource) {
        this.recordSource = recordSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("route")
    public String route;
    public PatientVaccineRecord withRoute(String route) {
        this.route = route;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public PatientVaccineRecord withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public String units;
    public PatientVaccineRecord withUnits(String units) {
        this.units = units;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public PatientVaccineRecord withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vaccine_inventory")
    public Long vaccineInventory;
    public PatientVaccineRecord withVaccineInventory(Long vaccineInventory) {
        this.vaccineInventory = vaccineInventory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vis")
    public String vis;
    public PatientVaccineRecord withVis(String vis) {
        this.vis = vis;
        return this;
    }
}