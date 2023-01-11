import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Structure of a billing note
**/
export declare class AppointmentClaimBillingNotes extends SpeakeasyBase {
    appointment?: number;
    createdAt?: string;
    createdBy?: string;
    id?: number;
    text?: string;
}
/**
 * Associated clinical note object
**/
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
    EraReceived = "ERA Received",
    EraDenied = "ERA Denied",
    HcfaFormFaxed = "HCFA Form Faxed"
}
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
    EraReceived = "ERA Received",
    EraDenied = "ERA Denied",
    HcfaFormFaxed = "HCFA Form Faxed"
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
**/
export declare class AppointmentSystemVitals extends SpeakeasyBase {
    bloodPressure1?: number;
    bloodPressure2?: number;
    bmi?: string;
    headCircumference?: number;
    headCircumferenceUnits?: string;
    height?: number;
    heightUnits?: string;
    oxygenSaturation?: number;
    pain?: string;
    pulse?: number;
    respiratoryRate?: number;
    smokingStatus?: AppointmentSystemVitalsSmokingStatusEnum;
    temperature?: number;
    temperatureUnits?: string;
    weight?: number;
    weightUnits?: string;
}
export declare class Appointment extends SpeakeasyBase {
    allowOverlapping?: boolean;
    apptIsBreak?: boolean;
    baseRecurringAppointment?: string;
    billingNotes?: AppointmentClaimBillingNotes[];
    billingProvider?: string;
    billingStatus?: string;
    clinicalNote?: AppointmentClinicalNote;
    clonedFrom?: number;
    color?: string;
    createdAt?: string;
    customFields?: AppointmentCustomAppointmentFieldValue[];
    customVitals?: AppointmentCustomVitalValue[];
    deletedFlag?: boolean;
    doctor: number;
    duration?: number;
    examRoom: number;
    extendedUpdatedAt?: string;
    firstBilledDate?: string;
    icd10Codes?: string[];
    icd9Codes?: string[];
    id?: string;
    ins1Status?: AppointmentIns1StatusEnum;
    ins2Status?: AppointmentIns2StatusEnum;
    isVirtualBase?: boolean;
    isWalkIn?: boolean;
    lastBilledDate?: string;
    notes?: string;
    office: number;
    patient: number;
    primaryInsuranceIdNumber?: string;
    primaryInsurerName?: string;
    primaryInsurerPayerId?: string;
    profile?: number;
    reason?: string;
    recurringAppointment?: boolean;
    reminderProfile?: string;
    reminders?: AppointmentSimpleReminder[];
    scheduledTime: string;
    secondaryInsuranceIdNumber?: string;
    secondaryInsurerName?: string;
    secondaryInsurerPayerId?: string;
    status?: AppointmentStatusEnum;
    statusTransitions?: AppointmentAppointmentStatusTransition[];
    supervisingProvider?: string;
    updatedAt?: string;
    vitals?: AppointmentSystemVitals;
}
