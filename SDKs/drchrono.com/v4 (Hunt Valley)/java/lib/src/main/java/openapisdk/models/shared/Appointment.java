package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Appointment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_overlapping")
    public Boolean allowOverlapping;
    public Appointment withAllowOverlapping(Boolean allowOverlapping) {
        this.allowOverlapping = allowOverlapping;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appt_is_break")
    public Boolean apptIsBreak;
    public Appointment withApptIsBreak(Boolean apptIsBreak) {
        this.apptIsBreak = apptIsBreak;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_recurring_appointment")
    public String baseRecurringAppointment;
    public Appointment withBaseRecurringAppointment(String baseRecurringAppointment) {
        this.baseRecurringAppointment = baseRecurringAppointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_notes")
    public AppointmentClaimBillingNotes[] billingNotes;
    public Appointment withBillingNotes(AppointmentClaimBillingNotes[] billingNotes) {
        this.billingNotes = billingNotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_provider")
    public String billingProvider;
    public Appointment withBillingProvider(String billingProvider) {
        this.billingProvider = billingProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_status")
    public String billingStatus;
    public Appointment withBillingStatus(String billingStatus) {
        this.billingStatus = billingStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note")
    public AppointmentClinicalNote clinicalNote;
    public Appointment withClinicalNote(AppointmentClinicalNote clinicalNote) {
        this.clinicalNote = clinicalNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloned_from")
    public Long clonedFrom;
    public Appointment withClonedFrom(Long clonedFrom) {
        this.clonedFrom = clonedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public Appointment withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;
    public Appointment withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public AppointmentCustomAppointmentFieldValue[] customFields;
    public Appointment withCustomFields(AppointmentCustomAppointmentFieldValue[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_vitals")
    public AppointmentCustomVitalValue[] customVitals;
    public Appointment withCustomVitals(AppointmentCustomVitalValue[] customVitals) {
        this.customVitals = customVitals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_flag")
    public Boolean deletedFlag;
    public Appointment withDeletedFlag(Boolean deletedFlag) {
        this.deletedFlag = deletedFlag;
        return this;
    }
    @JsonProperty("doctor")
    public Long doctor;
    public Appointment withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Appointment withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("exam_room")
    public Long examRoom;
    public Appointment withExamRoom(Long examRoom) {
        this.examRoom = examRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extended_updated_at")
    public String extendedUpdatedAt;
    public Appointment withExtendedUpdatedAt(String extendedUpdatedAt) {
        this.extendedUpdatedAt = extendedUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_billed_date")
    public String firstBilledDate;
    public Appointment withFirstBilledDate(String firstBilledDate) {
        this.firstBilledDate = firstBilledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icd10_codes")
    public String[] icd10Codes;
    public Appointment withIcd10Codes(String[] icd10Codes) {
        this.icd10Codes = icd10Codes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icd9_codes")
    public String[] icd9Codes;
    public Appointment withIcd9Codes(String[] icd9Codes) {
        this.icd9Codes = icd9Codes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Appointment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins1_status")
    public AppointmentIns1StatusEnum ins1Status;
    public Appointment withIns1Status(AppointmentIns1StatusEnum ins1Status) {
        this.ins1Status = ins1Status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ins2_status")
    public AppointmentIns2StatusEnum ins2Status;
    public Appointment withIns2Status(AppointmentIns2StatusEnum ins2Status) {
        this.ins2Status = ins2Status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_virtual_base")
    public Boolean isVirtualBase;
    public Appointment withIsVirtualBase(Boolean isVirtualBase) {
        this.isVirtualBase = isVirtualBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_walk_in")
    public Boolean isWalkIn;
    public Appointment withIsWalkIn(Boolean isWalkIn) {
        this.isWalkIn = isWalkIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_billed_date")
    public String lastBilledDate;
    public Appointment withLastBilledDate(String lastBilledDate) {
        this.lastBilledDate = lastBilledDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notes")
    public String notes;
    public Appointment withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonProperty("office")
    public Long office;
    public Appointment withOffice(Long office) {
        this.office = office;
        return this;
    }
    @JsonProperty("patient")
    public Long patient;
    public Appointment withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_insurance_id_number")
    public String primaryInsuranceIdNumber;
    public Appointment withPrimaryInsuranceIdNumber(String primaryInsuranceIdNumber) {
        this.primaryInsuranceIdNumber = primaryInsuranceIdNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_insurer_name")
    public String primaryInsurerName;
    public Appointment withPrimaryInsurerName(String primaryInsurerName) {
        this.primaryInsurerName = primaryInsurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_insurer_payer_id")
    public String primaryInsurerPayerId;
    public Appointment withPrimaryInsurerPayerId(String primaryInsurerPayerId) {
        this.primaryInsurerPayerId = primaryInsurerPayerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public Long profile;
    public Appointment withProfile(Long profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public Appointment withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurring_appointment")
    public Boolean recurringAppointment;
    public Appointment withRecurringAppointment(Boolean recurringAppointment) {
        this.recurringAppointment = recurringAppointment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminder_profile")
    public String reminderProfile;
    public Appointment withReminderProfile(String reminderProfile) {
        this.reminderProfile = reminderProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reminders")
    public AppointmentSimpleReminder[] reminders;
    public Appointment withReminders(AppointmentSimpleReminder[] reminders) {
        this.reminders = reminders;
        return this;
    }
    @JsonProperty("scheduled_time")
    public String scheduledTime;
    public Appointment withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary_insurance_id_number")
    public String secondaryInsuranceIdNumber;
    public Appointment withSecondaryInsuranceIdNumber(String secondaryInsuranceIdNumber) {
        this.secondaryInsuranceIdNumber = secondaryInsuranceIdNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary_insurer_name")
    public String secondaryInsurerName;
    public Appointment withSecondaryInsurerName(String secondaryInsurerName) {
        this.secondaryInsurerName = secondaryInsurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary_insurer_payer_id")
    public String secondaryInsurerPayerId;
    public Appointment withSecondaryInsurerPayerId(String secondaryInsurerPayerId) {
        this.secondaryInsurerPayerId = secondaryInsurerPayerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AppointmentStatusEnum status;
    public Appointment withStatus(AppointmentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status_transitions")
    public AppointmentAppointmentStatusTransition[] statusTransitions;
    public Appointment withStatusTransitions(AppointmentAppointmentStatusTransition[] statusTransitions) {
        this.statusTransitions = statusTransitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supervising_provider")
    public String supervisingProvider;
    public Appointment withSupervisingProvider(String supervisingProvider) {
        this.supervisingProvider = supervisingProvider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;
    public Appointment withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vitals")
    public AppointmentSystemVitals vitals;
    public Appointment withVitals(AppointmentSystemVitals vitals) {
        this.vitals = vitals;
        return this;
    }
}