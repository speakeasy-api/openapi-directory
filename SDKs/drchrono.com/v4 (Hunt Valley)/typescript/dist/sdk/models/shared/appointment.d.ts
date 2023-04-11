import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structure of a billing note
 */
export declare class AppointmentClaimBillingNotes extends SpeakeasyBase {
    appointment?: number;
    createdAt?: string;
    createdBy?: string;
    /**
     * ID of the billing note
     */
    id?: number;
    /**
     * Content of the note
     */
    text?: string;
}
/**
 * Associated clinical note object
 */
export declare class AppointmentClinicalNote extends SpeakeasyBase {
    locked?: boolean;
    pdf?: string;
    updatedAt?: string;
}
export declare class AppointmentCustomAppointmentFieldValue extends SpeakeasyBase {
    createdAt?: string;
    fieldType?: number;
    fieldValue?: string;
    updatedAt?: string;
}
export declare class AppointmentCustomVitalValue extends SpeakeasyBase {
    value?: string;
    vitalType?: number;
}
/**
 * Billing status of primary insurer
 */
export declare enum AppointmentIns1StatusEnum {
    Unknown = "",
    IncompleteInformation = "Incomplete Information",
    InProcessEmdeon = "In Process Emdeon",
    RejectedEmdeon = "Rejected Emdeon",
    RejectedJopari = "Rejected Jopari",
    InProcessPayor = "In Process Payor",
    RejectedWaystarProfessional = "Rejected Waystar Professional",
    RejectedWaystarInstitutional = "Rejected Waystar Institutional",
    InProcessPayer = "In Process Payer",
    PayerAcknowledged = "Payer Acknowledged",
    RejectedPayor = "Rejected Payor",
    RejectedPayer = "Rejected Payer",
    PaidInFull = "Paid in Full",
    PartiallyPaid = "Partially Paid",
    CoordinationOfBenefits = "Coordination of Benefits",
    ERAReceived = "ERA Received",
    ERADenied = "ERA Denied",
    HCFAFormFaxed = "HCFA Form Faxed"
}
/**
 * Billing status of secondary insurer
 */
export declare enum AppointmentIns2StatusEnum {
    Unknown = "",
    IncompleteInformation = "Incomplete Information",
    InProcessEmdeon = "In Process Emdeon",
    RejectedEmdeon = "Rejected Emdeon",
    RejectedJopari = "Rejected Jopari",
    InProcessPayor = "In Process Payor",
    RejectedWaystarProfessional = "Rejected Waystar Professional",
    RejectedWaystarInstitutional = "Rejected Waystar Institutional",
    InProcessPayer = "In Process Payer",
    PayerAcknowledged = "Payer Acknowledged",
    RejectedPayor = "Rejected Payor",
    RejectedPayer = "Rejected Payer",
    PaidInFull = "Paid in Full",
    PartiallyPaid = "Partially Paid",
    CoordinationOfBenefits = "Coordination of Benefits",
    ERAReceived = "ERA Received",
    ERADenied = "ERA Denied",
    HCFAFormFaxed = "HCFA Form Faxed"
}
export declare enum AppointmentSimpleReminderTypeEnum {
    Email = "email",
    Sms = "sms",
    Phone = "phone",
    AutoCall = "auto_call"
}
export declare class AppointmentSimpleReminder extends SpeakeasyBase {
    id?: number;
    scheduledTime?: string;
    type?: AppointmentSimpleReminderTypeEnum;
}
/**
 * One of ``, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.
 */
export declare enum AppointmentStatusEnum {
    Unknown = "",
    Arrived = "Arrived",
    CheckedIn = "Checked In",
    CheckedInOnline = "Checked In Online",
    InRoom = "In Room",
    InSession = "In Session",
    Complete = "Complete",
    Confirmed = "Confirmed",
    NotConfirmed = "Not Confirmed",
    Rescheduled = "Rescheduled",
    Cancelled = "Cancelled",
    NoShow = "No Show"
}
export declare class AppointmentAppointmentStatusTransition extends SpeakeasyBase {
    appointment?: string;
    datetime?: string;
    fromStatus?: string;
    toStatus?: string;
}
export declare enum AppointmentSystemVitalsSmokingStatusEnum {
    Blank = "blank",
    FourHundredAndFortyNineMillionEightHundredAndSixtyEightThousandAndTwo = "449868002",
    FourHundredAndTwentyEightTrillionFortyOneBillionOneHundredAndTwentyFourThousandOneHundredAndSix = "428041000124106",
    EightMillionFiveHundredAndSeventeenThousandAndSix = "8517006",
    TwoHundredAndSixtySixMillionNineHundredAndNineteenThousandAndFive = "266919005",
    SeventySevenMillionOneHundredAndSeventySixThousandAndTwo = "77176002",
    TwoHundredAndSixtySixMillionNineHundredAndTwentySevenThousandAndOne = "266927001",
    FourHundredAndTwentyEightTrillionSeventyOneBillionOneHundredAndTwentyFourThousandOneHundredAndThree = "428071000124103",
    FourHundredAndTwentyEightTrillionSixtyOneBillionOneHundredAndTwentyFourThousandOneHundredAndFive = "428061000124105"
}
/**
 * Clinical vitals associated with the appointment
 */
export declare class AppointmentSystemVitals extends SpeakeasyBase {
    bloodPressure1?: number;
    bloodPressure2?: number;
    bmi?: string;
    headCircumference?: number;
    headCircumferenceUnits?: string;
    height?: number;
    heightUnits?: string;
    oxygenSaturation?: number;
    /**
     * 1-10 pain scale.
     */
    pain?: string;
    /**
     * Beats per minute.
     */
    pulse?: number;
    /**
     * Breathes per minute.
     */
    respiratoryRate?: number;
    smokingStatus?: AppointmentSystemVitalsSmokingStatusEnum;
    temperature?: number;
    temperatureUnits?: string;
    weight?: number;
    weightUnits?: string;
}
/**
 * Created
 */
export declare class Appointment extends SpeakeasyBase {
    /**
     * Bypass overlap check.
     */
    allowOverlapping?: boolean;
    apptIsBreak?: boolean;
    /**
     * ID of base appointment of a recurrign series
     */
    baseRecurringAppointment?: string;
    /**
     * Billing notes of the appointment. For writing, check `/api/claim_billing_notes`
     */
    billingNotes?: AppointmentClaimBillingNotes[];
    billingProvider?: string;
    /**
     * Should be one of `Auto Accident Claim`, `Balance Due`, `Bill Insurance`, `Bill Secondary Insurance`, `Durable Medical Equipment Claim`, `Internal Review`, `Paid In Full`, `Settled`, `Worker's Comp Claim` or one of the custom billing status
     */
    billingStatus?: string;
    /**
     * Associated clinical note object
     */
    clinicalNote?: AppointmentClinicalNote;
    /**
     * ID of the original appointment which this appointment cloned from. Will be null if the appointment is not cloned.
     */
    clonedFrom?: number;
    color?: string;
    createdAt?: string;
    /**
     * Custom appointment fields
     */
    customFields?: AppointmentCustomAppointmentFieldValue[];
    /**
     * Custom vitals associated with this appointment.
     */
    customVitals?: AppointmentCustomVitalValue[];
    /**
     * Whether the appointmetn is deleted.
     */
    deletedFlag?: boolean;
    /**
     * Doctor ID
     */
    doctor: number;
    /**
     * Length of the appointment in minutes. Optional if `profile` is provided.
     */
    duration?: number;
    /**
     * Index of the exam room that this appointment occurs in. See `/api/offices`
     */
    examRoom: number;
    /**
     * The most recent update time among appointment itself, its vitals and its custom vitals
     */
    extendedUpdatedAt?: string;
    firstBilledDate?: string;
    icd10Codes?: string[];
    icd9Codes?: string[];
    /**
     * Unique identifier. Usually numeric, but not always
     */
    id?: string;
    /**
     * Billing status of primary insurer
     */
    ins1Status?: AppointmentIns1StatusEnum;
    /**
     * Billing status of secondary insurer
     */
    ins2Status?: AppointmentIns2StatusEnum;
    isVirtualBase?: boolean;
    /**
     * Whether the appointment is a walk-in appointment
     */
    isWalkIn?: boolean;
    lastBilledDate?: string;
    notes?: string;
    /**
     * Office ID
     */
    office: number;
    /**
     * ID of this appointment's patient. Breaks have a null patient field.
     */
    patient: number;
    primaryInsuranceIdNumber?: string;
    primaryInsurerName?: string;
    primaryInsurerPayerId?: string;
    /**
     * ID of an `/api/appointment_profiles` instance. The profile sets default values for `color`, `duration`, and `reason` on creation, which can be overriden by setting these values explicitly.
     */
    profile?: number;
    /**
     * Default to `""`
     */
    reason?: string;
    /**
     * Whether the appointment is a recurring appointment or not
     */
    recurringAppointment?: boolean;
    /**
     * Write-only. ID of an `/api/reminder_profiles` instance. Set this to apply a reminder profile to the appointment. Cannot be applied to an appointment with reminders.
     */
    reminderProfile?: string;
    /**
     * Scheduled reminders of the appointment
     */
    reminders?: AppointmentSimpleReminder[];
    /**
     * The starting time of the appointment
     */
    scheduledTime: string;
    secondaryInsuranceIdNumber?: string;
    secondaryInsurerName?: string;
    secondaryInsurerPayerId?: string;
    /**
     * One of ``, `Arrived`, `Checked In`, `In Room`, `Cancelled`, `Complete`, `Confirmed`, `In Session`, `No Show`, `Not Confirmed`, or `Rescheduled`. Or one of the custom statuses.
     */
    status?: AppointmentStatusEnum;
    statusTransitions?: AppointmentAppointmentStatusTransition[];
    /**
     * Supervising provider of appointment if set.
     */
    supervisingProvider?: string;
    updatedAt?: string;
    /**
     * Clinical vitals associated with the appointment
     */
    vitals?: AppointmentSystemVitals;
}
