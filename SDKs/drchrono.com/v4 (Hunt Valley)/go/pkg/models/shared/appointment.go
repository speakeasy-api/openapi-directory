package shared

// AppointmentClaimBillingNotes
// Structure of a billing note
type AppointmentClaimBillingNotes struct {
	Appointment *int64  `json:"appointment,omitempty"`
	CreatedAt   *string `json:"created_at,omitempty"`
	CreatedBy   *string `json:"created_by,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Text        *string `json:"text,omitempty"`
}

// AppointmentClinicalNote
// Associated clinical note object
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

type AppointmentSimpleReminderTypeEnum string

const (
	AppointmentSimpleReminderTypeEnumEmail    AppointmentSimpleReminderTypeEnum = "email"
	AppointmentSimpleReminderTypeEnumSms      AppointmentSimpleReminderTypeEnum = "sms"
	AppointmentSimpleReminderTypeEnumPhone    AppointmentSimpleReminderTypeEnum = "phone"
	AppointmentSimpleReminderTypeEnumAutoCall AppointmentSimpleReminderTypeEnum = "auto_call"
)

type AppointmentSimpleReminder struct {
	ID            *int64                             `json:"id,omitempty"`
	ScheduledTime *string                            `json:"scheduled_time,omitempty"`
	Type          *AppointmentSimpleReminderTypeEnum `json:"type,omitempty"`
}

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

// AppointmentSystemVitals
// Clinical vitals associated with the appointment
type AppointmentSystemVitals struct {
	BloodPressure1         *int64                                    `json:"blood_pressure_1,omitempty"`
	BloodPressure2         *int64                                    `json:"blood_pressure_2,omitempty"`
	Bmi                    *string                                   `json:"bmi,omitempty"`
	HeadCircumference      *float64                                  `json:"head_circumference,omitempty"`
	HeadCircumferenceUnits *string                                   `json:"head_circumference_units,omitempty"`
	Height                 *float64                                  `json:"height,omitempty"`
	HeightUnits            *string                                   `json:"height_units,omitempty"`
	OxygenSaturation       *float64                                  `json:"oxygen_saturation,omitempty"`
	Pain                   *string                                   `json:"pain,omitempty"`
	Pulse                  *int64                                    `json:"pulse,omitempty"`
	RespiratoryRate        *int64                                    `json:"respiratory_rate,omitempty"`
	SmokingStatus          *AppointmentSystemVitalsSmokingStatusEnum `json:"smoking_status,omitempty"`
	Temperature            *float64                                  `json:"temperature,omitempty"`
	TemperatureUnits       *string                                   `json:"temperature_units,omitempty"`
	Weight                 *float64                                  `json:"weight,omitempty"`
	WeightUnits            *string                                   `json:"weight_units,omitempty"`
}

type Appointment struct {
	AllowOverlapping           *bool                                    `json:"allow_overlapping,omitempty"`
	ApptIsBreak                *bool                                    `json:"appt_is_break,omitempty"`
	BaseRecurringAppointment   *string                                  `json:"base_recurring_appointment,omitempty"`
	BillingNotes               []AppointmentClaimBillingNotes           `json:"billing_notes,omitempty"`
	BillingProvider            *string                                  `json:"billing_provider,omitempty"`
	BillingStatus              *string                                  `json:"billing_status,omitempty"`
	ClinicalNote               *AppointmentClinicalNote                 `json:"clinical_note,omitempty"`
	ClonedFrom                 *int64                                   `json:"cloned_from,omitempty"`
	Color                      *string                                  `json:"color,omitempty"`
	CreatedAt                  *string                                  `json:"created_at,omitempty"`
	CustomFields               []AppointmentCustomAppointmentFieldValue `json:"custom_fields,omitempty"`
	CustomVitals               []AppointmentCustomVitalValue            `json:"custom_vitals,omitempty"`
	DeletedFlag                *bool                                    `json:"deleted_flag,omitempty"`
	Doctor                     int64                                    `json:"doctor"`
	Duration                   *int64                                   `json:"duration,omitempty"`
	ExamRoom                   int64                                    `json:"exam_room"`
	ExtendedUpdatedAt          *string                                  `json:"extended_updated_at,omitempty"`
	FirstBilledDate            *string                                  `json:"first_billed_date,omitempty"`
	Icd10Codes                 []string                                 `json:"icd10_codes,omitempty"`
	Icd9Codes                  []string                                 `json:"icd9_codes,omitempty"`
	ID                         *string                                  `json:"id,omitempty"`
	Ins1Status                 *AppointmentIns1StatusEnum               `json:"ins1_status,omitempty"`
	Ins2Status                 *AppointmentIns2StatusEnum               `json:"ins2_status,omitempty"`
	IsVirtualBase              *bool                                    `json:"is_virtual_base,omitempty"`
	IsWalkIn                   *bool                                    `json:"is_walk_in,omitempty"`
	LastBilledDate             *string                                  `json:"last_billed_date,omitempty"`
	Notes                      *string                                  `json:"notes,omitempty"`
	Office                     int64                                    `json:"office"`
	Patient                    int64                                    `json:"patient"`
	PrimaryInsuranceIDNumber   *string                                  `json:"primary_insurance_id_number,omitempty"`
	PrimaryInsurerName         *string                                  `json:"primary_insurer_name,omitempty"`
	PrimaryInsurerPayerID      *string                                  `json:"primary_insurer_payer_id,omitempty"`
	Profile                    *int64                                   `json:"profile,omitempty"`
	Reason                     *string                                  `json:"reason,omitempty"`
	RecurringAppointment       *bool                                    `json:"recurring_appointment,omitempty"`
	ReminderProfile            *string                                  `json:"reminder_profile,omitempty"`
	Reminders                  []AppointmentSimpleReminder              `json:"reminders,omitempty"`
	ScheduledTime              string                                   `json:"scheduled_time"`
	SecondaryInsuranceIDNumber *string                                  `json:"secondary_insurance_id_number,omitempty"`
	SecondaryInsurerName       *string                                  `json:"secondary_insurer_name,omitempty"`
	SecondaryInsurerPayerID    *string                                  `json:"secondary_insurer_payer_id,omitempty"`
	Status                     *AppointmentStatusEnum                   `json:"status,omitempty"`
	StatusTransitions          []AppointmentAppointmentStatusTransition `json:"status_transitions,omitempty"`
	SupervisingProvider        *string                                  `json:"supervising_provider,omitempty"`
	UpdatedAt                  *string                                  `json:"updated_at,omitempty"`
	Vitals                     *AppointmentSystemVitals                 `json:"vitals,omitempty"`
}
