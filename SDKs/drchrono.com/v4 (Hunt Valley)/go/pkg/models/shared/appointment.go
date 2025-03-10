// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// AppointmentClaimBillingNotes - Structure of a billing note
type AppointmentClaimBillingNotes struct {
	Appointment *int64  `json:"appointment,omitempty"`
	CreatedAt   *string `json:"created_at,omitempty"`
	CreatedBy   *string `json:"created_by,omitempty"`
	// ID of the billing note
	ID *int64 `json:"id,omitempty"`
	// Content of the note
	Text *string `json:"text,omitempty"`
}

// AppointmentClinicalNote - Associated clinical note object
type AppointmentClinicalNote struct {
	Locked    *bool   `json:"locked,omitempty"`
	Pdf       *string `json:"pdf,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

type AppointmentCustomAppointmentFieldValue struct {
	CreatedAt  *string `json:"created_at,omitempty"`
	FieldType  *int64  `json:"field_type,omitempty"`
	FieldValue *string `json:"field_value,omitempty"`
	UpdatedAt  *string `json:"updated_at,omitempty"`
}

type AppointmentCustomVitalValue struct {
	Value     *string `json:"value,omitempty"`
	VitalType *int64  `json:"vital_type,omitempty"`
}

// AppointmentIns1StatusEnum - Billing status of primary insurer
type AppointmentIns1StatusEnum string

const (
	AppointmentIns1StatusEnumUnknown                      AppointmentIns1StatusEnum = ""
	AppointmentIns1StatusEnumIncompleteInformation        AppointmentIns1StatusEnum = "Incomplete Information"
	AppointmentIns1StatusEnumInProcessEmdeon              AppointmentIns1StatusEnum = "In Process Emdeon"
	AppointmentIns1StatusEnumRejectedEmdeon               AppointmentIns1StatusEnum = "Rejected Emdeon"
	AppointmentIns1StatusEnumRejectedJopari               AppointmentIns1StatusEnum = "Rejected Jopari"
	AppointmentIns1StatusEnumInProcessPayor               AppointmentIns1StatusEnum = "In Process Payor"
	AppointmentIns1StatusEnumRejectedWaystarProfessional  AppointmentIns1StatusEnum = "Rejected Waystar Professional"
	AppointmentIns1StatusEnumRejectedWaystarInstitutional AppointmentIns1StatusEnum = "Rejected Waystar Institutional"
	AppointmentIns1StatusEnumInProcessPayer               AppointmentIns1StatusEnum = "In Process Payer"
	AppointmentIns1StatusEnumPayerAcknowledged            AppointmentIns1StatusEnum = "Payer Acknowledged"
	AppointmentIns1StatusEnumRejectedPayor                AppointmentIns1StatusEnum = "Rejected Payor"
	AppointmentIns1StatusEnumRejectedPayer                AppointmentIns1StatusEnum = "Rejected Payer"
	AppointmentIns1StatusEnumPaidInFull                   AppointmentIns1StatusEnum = "Paid in Full"
	AppointmentIns1StatusEnumPartiallyPaid                AppointmentIns1StatusEnum = "Partially Paid"
	AppointmentIns1StatusEnumCoordinationOfBenefits       AppointmentIns1StatusEnum = "Coordination of Benefits"
	AppointmentIns1StatusEnumEraReceived                  AppointmentIns1StatusEnum = "ERA Received"
	AppointmentIns1StatusEnumEraDenied                    AppointmentIns1StatusEnum = "ERA Denied"
	AppointmentIns1StatusEnumHcfaFormFaxed                AppointmentIns1StatusEnum = "HCFA Form Faxed"
)

func (e AppointmentIns1StatusEnum) ToPointer() *AppointmentIns1StatusEnum {
	return &e
}

func (e *AppointmentIns1StatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "Incomplete Information":
		fallthrough
	case "In Process Emdeon":
		fallthrough
	case "Rejected Emdeon":
		fallthrough
	case "Rejected Jopari":
		fallthrough
	case "In Process Payor":
		fallthrough
	case "Rejected Waystar Professional":
		fallthrough
	case "Rejected Waystar Institutional":
		fallthrough
	case "In Process Payer":
		fallthrough
	case "Payer Acknowledged":
		fallthrough
	case "Rejected Payor":
		fallthrough
	case "Rejected Payer":
		fallthrough
	case "Paid in Full":
		fallthrough
	case "Partially Paid":
		fallthrough
	case "Coordination of Benefits":
		fallthrough
	case "ERA Received":
		fallthrough
	case "ERA Denied":
		fallthrough
	case "HCFA Form Faxed":
		*e = AppointmentIns1StatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppointmentIns1StatusEnum: %v", v)
	}
}

// AppointmentIns2StatusEnum - Billing status of secondary insurer
type AppointmentIns2StatusEnum string

const (
	AppointmentIns2StatusEnumUnknown                      AppointmentIns2StatusEnum = ""
	AppointmentIns2StatusEnumIncompleteInformation        AppointmentIns2StatusEnum = "Incomplete Information"
	AppointmentIns2StatusEnumInProcessEmdeon              AppointmentIns2StatusEnum = "In Process Emdeon"
	AppointmentIns2StatusEnumRejectedEmdeon               AppointmentIns2StatusEnum = "Rejected Emdeon"
	AppointmentIns2StatusEnumRejectedJopari               AppointmentIns2StatusEnum = "Rejected Jopari"
	AppointmentIns2StatusEnumInProcessPayor               AppointmentIns2StatusEnum = "In Process Payor"
	AppointmentIns2StatusEnumRejectedWaystarProfessional  AppointmentIns2StatusEnum = "Rejected Waystar Professional"
	AppointmentIns2StatusEnumRejectedWaystarInstitutional AppointmentIns2StatusEnum = "Rejected Waystar Institutional"
	AppointmentIns2StatusEnumInProcessPayer               AppointmentIns2StatusEnum = "In Process Payer"
	AppointmentIns2StatusEnumPayerAcknowledged            AppointmentIns2StatusEnum = "Payer Acknowledged"
	AppointmentIns2StatusEnumRejectedPayor                AppointmentIns2StatusEnum = "Rejected Payor"
	AppointmentIns2StatusEnumRejectedPayer                AppointmentIns2StatusEnum = "Rejected Payer"
	AppointmentIns2StatusEnumPaidInFull                   AppointmentIns2StatusEnum = "Paid in Full"
	AppointmentIns2StatusEnumPartiallyPaid                AppointmentIns2StatusEnum = "Partially Paid"
	AppointmentIns2StatusEnumCoordinationOfBenefits       AppointmentIns2StatusEnum = "Coordination of Benefits"
	AppointmentIns2StatusEnumEraReceived                  AppointmentIns2StatusEnum = "ERA Received"
	AppointmentIns2StatusEnumEraDenied                    AppointmentIns2StatusEnum = "ERA Denied"
	AppointmentIns2StatusEnumHcfaFormFaxed                AppointmentIns2StatusEnum = "HCFA Form Faxed"
)

func (e AppointmentIns2StatusEnum) ToPointer() *AppointmentIns2StatusEnum {
	return &e
}

func (e *AppointmentIns2StatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "Incomplete Information":
		fallthrough
	case "In Process Emdeon":
		fallthrough
	case "Rejected Emdeon":
		fallthrough
	case "Rejected Jopari":
		fallthrough
	case "In Process Payor":
		fallthrough
	case "Rejected Waystar Professional":
		fallthrough
	case "Rejected Waystar Institutional":
		fallthrough
	case "In Process Payer":
		fallthrough
	case "Payer Acknowledged":
		fallthrough
	case "Rejected Payor":
		fallthrough
	case "Rejected Payer":
		fallthrough
	case "Paid in Full":
		fallthrough
	case "Partially Paid":
		fallthrough
	case "Coordination of Benefits":
		fallthrough
	case "ERA Received":
		fallthrough
	case "ERA Denied":
		fallthrough
	case "HCFA Form Faxed":
		*e = AppointmentIns2StatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppointmentIns2StatusEnum: %v", v)
	}
}

type AppointmentSimpleReminderTypeEnum string

const (
	AppointmentSimpleReminderTypeEnumEmail    AppointmentSimpleReminderTypeEnum = "email"
	AppointmentSimpleReminderTypeEnumSms      AppointmentSimpleReminderTypeEnum = "sms"
	AppointmentSimpleReminderTypeEnumPhone    AppointmentSimpleReminderTypeEnum = "phone"
	AppointmentSimpleReminderTypeEnumAutoCall AppointmentSimpleReminderTypeEnum = "auto_call"
)

func (e AppointmentSimpleReminderTypeEnum) ToPointer() *AppointmentSimpleReminderTypeEnum {
	return &e
}

func (e *AppointmentSimpleReminderTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "email":
		fallthrough
	case "sms":
		fallthrough
	case "phone":
		fallthrough
	case "auto_call":
		*e = AppointmentSimpleReminderTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppointmentSimpleReminderTypeEnum: %v", v)
	}
}

type AppointmentSimpleReminder struct {
	ID            *int64                             `json:"id,omitempty"`
	ScheduledTime *string                            `json:"scheduled_time,omitempty"`
	Type          *AppointmentSimpleReminderTypeEnum `json:"type,omitempty"`
}

// AppointmentStatusEnum - One of “, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.
type AppointmentStatusEnum string

const (
	AppointmentStatusEnumUnknown         AppointmentStatusEnum = ""
	AppointmentStatusEnumArrived         AppointmentStatusEnum = "Arrived"
	AppointmentStatusEnumCheckedIn       AppointmentStatusEnum = "Checked In"
	AppointmentStatusEnumCheckedInOnline AppointmentStatusEnum = "Checked In Online"
	AppointmentStatusEnumInRoom          AppointmentStatusEnum = "In Room"
	AppointmentStatusEnumInSession       AppointmentStatusEnum = "In Session"
	AppointmentStatusEnumComplete        AppointmentStatusEnum = "Complete"
	AppointmentStatusEnumConfirmed       AppointmentStatusEnum = "Confirmed"
	AppointmentStatusEnumNotConfirmed    AppointmentStatusEnum = "Not Confirmed"
	AppointmentStatusEnumRescheduled     AppointmentStatusEnum = "Rescheduled"
	AppointmentStatusEnumCancelled       AppointmentStatusEnum = "Cancelled"
	AppointmentStatusEnumNoShow          AppointmentStatusEnum = "No Show"
)

func (e AppointmentStatusEnum) ToPointer() *AppointmentStatusEnum {
	return &e
}

func (e *AppointmentStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "Arrived":
		fallthrough
	case "Checked In":
		fallthrough
	case "Checked In Online":
		fallthrough
	case "In Room":
		fallthrough
	case "In Session":
		fallthrough
	case "Complete":
		fallthrough
	case "Confirmed":
		fallthrough
	case "Not Confirmed":
		fallthrough
	case "Rescheduled":
		fallthrough
	case "Cancelled":
		fallthrough
	case "No Show":
		*e = AppointmentStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppointmentStatusEnum: %v", v)
	}
}

type AppointmentAppointmentStatusTransition struct {
	Appointment *string `json:"appointment,omitempty"`
	Datetime    *string `json:"datetime,omitempty"`
	FromStatus  *string `json:"from_status,omitempty"`
	ToStatus    *string `json:"to_status,omitempty"`
}

type AppointmentSystemVitalsSmokingStatusEnum string

const (
	AppointmentSystemVitalsSmokingStatusEnumBlank                                                                                               AppointmentSystemVitalsSmokingStatusEnum = "blank"
	AppointmentSystemVitalsSmokingStatusEnumFourHundredAndFortyNineMillionEightHundredAndSixtyEightThousandAndTwo                               AppointmentSystemVitalsSmokingStatusEnum = "449868002"
	AppointmentSystemVitalsSmokingStatusEnumFourHundredAndTwentyEightTrillionFortyOneBillionOneHundredAndTwentyFourThousandOneHundredAndSix     AppointmentSystemVitalsSmokingStatusEnum = "428041000124106"
	AppointmentSystemVitalsSmokingStatusEnumEightMillionFiveHundredAndSeventeenThousandAndSix                                                   AppointmentSystemVitalsSmokingStatusEnum = "8517006"
	AppointmentSystemVitalsSmokingStatusEnumTwoHundredAndSixtySixMillionNineHundredAndNineteenThousandAndFive                                   AppointmentSystemVitalsSmokingStatusEnum = "266919005"
	AppointmentSystemVitalsSmokingStatusEnumSeventySevenMillionOneHundredAndSeventySixThousandAndTwo                                            AppointmentSystemVitalsSmokingStatusEnum = "77176002"
	AppointmentSystemVitalsSmokingStatusEnumTwoHundredAndSixtySixMillionNineHundredAndTwentySevenThousandAndOne                                 AppointmentSystemVitalsSmokingStatusEnum = "266927001"
	AppointmentSystemVitalsSmokingStatusEnumFourHundredAndTwentyEightTrillionSeventyOneBillionOneHundredAndTwentyFourThousandOneHundredAndThree AppointmentSystemVitalsSmokingStatusEnum = "428071000124103"
	AppointmentSystemVitalsSmokingStatusEnumFourHundredAndTwentyEightTrillionSixtyOneBillionOneHundredAndTwentyFourThousandOneHundredAndFive    AppointmentSystemVitalsSmokingStatusEnum = "428061000124105"
)

func (e AppointmentSystemVitalsSmokingStatusEnum) ToPointer() *AppointmentSystemVitalsSmokingStatusEnum {
	return &e
}

func (e *AppointmentSystemVitalsSmokingStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "blank":
		fallthrough
	case "449868002":
		fallthrough
	case "428041000124106":
		fallthrough
	case "8517006":
		fallthrough
	case "266919005":
		fallthrough
	case "77176002":
		fallthrough
	case "266927001":
		fallthrough
	case "428071000124103":
		fallthrough
	case "428061000124105":
		*e = AppointmentSystemVitalsSmokingStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AppointmentSystemVitalsSmokingStatusEnum: %v", v)
	}
}

// AppointmentSystemVitals - Clinical vitals associated with the appointment
type AppointmentSystemVitals struct {
	BloodPressure1         *int64   `json:"blood_pressure_1,omitempty"`
	BloodPressure2         *int64   `json:"blood_pressure_2,omitempty"`
	Bmi                    *string  `json:"bmi,omitempty"`
	HeadCircumference      *float64 `json:"head_circumference,omitempty"`
	HeadCircumferenceUnits *string  `json:"head_circumference_units,omitempty"`
	Height                 *float64 `json:"height,omitempty"`
	HeightUnits            *string  `json:"height_units,omitempty"`
	OxygenSaturation       *float64 `json:"oxygen_saturation,omitempty"`
	// 1-10 pain scale.
	Pain *string `json:"pain,omitempty"`
	// Beats per minute.
	Pulse *int64 `json:"pulse,omitempty"`
	// Breathes per minute.
	RespiratoryRate  *int64                                    `json:"respiratory_rate,omitempty"`
	SmokingStatus    *AppointmentSystemVitalsSmokingStatusEnum `json:"smoking_status,omitempty"`
	Temperature      *float64                                  `json:"temperature,omitempty"`
	TemperatureUnits *string                                   `json:"temperature_units,omitempty"`
	Weight           *float64                                  `json:"weight,omitempty"`
	WeightUnits      *string                                   `json:"weight_units,omitempty"`
}

// Appointment - Created
type Appointment struct {
	// Bypass overlap check.
	AllowOverlapping *bool `json:"allow_overlapping,omitempty"`
	ApptIsBreak      *bool `json:"appt_is_break,omitempty"`
	// ID of base appointment of a recurrign series
	BaseRecurringAppointment *string `json:"base_recurring_appointment,omitempty"`
	// Billing notes of the appointment. For writing, check `/api/claim_billing_notes`
	BillingNotes    []AppointmentClaimBillingNotes `json:"billing_notes,omitempty"`
	BillingProvider *string                        `json:"billing_provider,omitempty"`
	// Should be one of `Auto Accident Claim`, `Balance Due`, `Bill Insurance`, `Bill Secondary Insurance`, `Durable Medical Equipment Claim`, `Internal Review`, `Paid In Full`, `Settled`, `Worker's Comp Claim` or one of the custom billing status
	BillingStatus *string `json:"billing_status,omitempty"`
	// Associated clinical note object
	ClinicalNote *AppointmentClinicalNote `json:"clinical_note,omitempty"`
	// ID of the original appointment which this appointment cloned from. Will be null if the appointment is not cloned.
	ClonedFrom *int64  `json:"cloned_from,omitempty"`
	Color      *string `json:"color,omitempty"`
	CreatedAt  *string `json:"created_at,omitempty"`
	// Custom appointment fields
	CustomFields []AppointmentCustomAppointmentFieldValue `json:"custom_fields,omitempty"`
	// Custom vitals associated with this appointment.
	CustomVitals []AppointmentCustomVitalValue `json:"custom_vitals,omitempty"`
	// Whether the appointmetn is deleted.
	DeletedFlag *bool `json:"deleted_flag,omitempty"`
	// Doctor ID
	Doctor int64 `json:"doctor"`
	// Length of the appointment in minutes. Optional if `profile` is provided.
	Duration *int64 `json:"duration,omitempty"`
	// Index of the exam room that this appointment occurs in. See `/api/offices`
	ExamRoom int64 `json:"exam_room"`
	// The most recent update time among appointment itself, its vitals and its custom vitals
	ExtendedUpdatedAt *string  `json:"extended_updated_at,omitempty"`
	FirstBilledDate   *string  `json:"first_billed_date,omitempty"`
	Icd10Codes        []string `json:"icd10_codes,omitempty"`
	Icd9Codes         []string `json:"icd9_codes,omitempty"`
	// Unique identifier. Usually numeric, but not always
	ID *string `json:"id,omitempty"`
	// Billing status of primary insurer
	Ins1Status *AppointmentIns1StatusEnum `json:"ins1_status,omitempty"`
	// Billing status of secondary insurer
	Ins2Status    *AppointmentIns2StatusEnum `json:"ins2_status,omitempty"`
	IsVirtualBase *bool                      `json:"is_virtual_base,omitempty"`
	// Whether the appointment is a walk-in appointment
	IsWalkIn       *bool   `json:"is_walk_in,omitempty"`
	LastBilledDate *string `json:"last_billed_date,omitempty"`
	Notes          *string `json:"notes,omitempty"`
	// Office ID
	Office int64 `json:"office"`
	// ID of this appointment's patient. Breaks have a null patient field.
	Patient                  int64   `json:"patient"`
	PrimaryInsuranceIDNumber *string `json:"primary_insurance_id_number,omitempty"`
	PrimaryInsurerName       *string `json:"primary_insurer_name,omitempty"`
	PrimaryInsurerPayerID    *string `json:"primary_insurer_payer_id,omitempty"`
	// ID of an `/api/appointment_profiles` instance. The profile sets default values for `color`, `duration`, and `reason` on creation, which can be overriden by setting these values explicitly.
	Profile *int64 `json:"profile,omitempty"`
	// Default to `""`
	Reason *string `json:"reason,omitempty"`
	// Whether the appointment is a recurring appointment or not
	RecurringAppointment *bool `json:"recurring_appointment,omitempty"`
	// Write-only. ID of an `/api/reminder_profiles` instance. Set this to apply a reminder profile to the appointment. Cannot be applied to an appointment with reminders.
	ReminderProfile *string `json:"reminder_profile,omitempty"`
	// Scheduled reminders of the appointment
	Reminders []AppointmentSimpleReminder `json:"reminders,omitempty"`
	// The starting time of the appointment
	ScheduledTime              string  `json:"scheduled_time"`
	SecondaryInsuranceIDNumber *string `json:"secondary_insurance_id_number,omitempty"`
	SecondaryInsurerName       *string `json:"secondary_insurer_name,omitempty"`
	SecondaryInsurerPayerID    *string `json:"secondary_insurer_payer_id,omitempty"`
	// One of ``, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.
	Status            *AppointmentStatusEnum                   `json:"status,omitempty"`
	StatusTransitions []AppointmentAppointmentStatusTransition `json:"status_transitions,omitempty"`
	// Supervising provider of appointment if set.
	SupervisingProvider *string `json:"supervising_provider,omitempty"`
	UpdatedAt           *string `json:"updated_at,omitempty"`
	// Clinical vitals associated with the appointment
	Vitals *AppointmentSystemVitals `json:"vitals,omitempty"`
}
