import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AppointmentClaimBillingNotes
/** 
 * Structure of a billing note
**/
export class AppointmentClaimBillingNotes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


// AppointmentClinicalNote
/** 
 * Associated clinical note object
**/
export class AppointmentClinicalNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=locked" })
  locked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class AppointmentCustomAppointmentFieldValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=field_type" })
  fieldType?: number;

  @SpeakeasyMetadata({ data: "json, name=field_value" })
  fieldValue?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class AppointmentCustomVitalValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;

  @SpeakeasyMetadata({ data: "json, name=vital_type" })
  vitalType?: number;
}

export enum AppointmentIns1StatusEnum {
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

export enum AppointmentIns2StatusEnum {
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

export enum AppointmentSimpleReminderTypeEnum {
    Email = "email",
    Sms = "sms",
    Phone = "phone",
    AutoCall = "auto_call"
}


export class AppointmentSimpleReminder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduled_time" })
  scheduledTime?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AppointmentSimpleReminderTypeEnum;
}

export enum AppointmentStatusEnum {
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


export class AppointmentAppointmentStatusTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: string;

  @SpeakeasyMetadata({ data: "json, name=datetime" })
  datetime?: string;

  @SpeakeasyMetadata({ data: "json, name=from_status" })
  fromStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=to_status" })
  toStatus?: string;
}

export enum AppointmentSystemVitalsSmokingStatusEnum {
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


// AppointmentSystemVitals
/** 
 * Clinical vitals associated with the appointment
**/
export class AppointmentSystemVitals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blood_pressure_1" })
  bloodPressure1?: number;

  @SpeakeasyMetadata({ data: "json, name=blood_pressure_2" })
  bloodPressure2?: number;

  @SpeakeasyMetadata({ data: "json, name=bmi" })
  bmi?: string;

  @SpeakeasyMetadata({ data: "json, name=head_circumference" })
  headCircumference?: number;

  @SpeakeasyMetadata({ data: "json, name=head_circumference_units" })
  headCircumferenceUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=height_units" })
  heightUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=oxygen_saturation" })
  oxygenSaturation?: number;

  @SpeakeasyMetadata({ data: "json, name=pain" })
  pain?: string;

  @SpeakeasyMetadata({ data: "json, name=pulse" })
  pulse?: number;

  @SpeakeasyMetadata({ data: "json, name=respiratory_rate" })
  respiratoryRate?: number;

  @SpeakeasyMetadata({ data: "json, name=smoking_status" })
  smokingStatus?: AppointmentSystemVitalsSmokingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=temperature" })
  temperature?: number;

  @SpeakeasyMetadata({ data: "json, name=temperature_units" })
  temperatureUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;

  @SpeakeasyMetadata({ data: "json, name=weight_units" })
  weightUnits?: string;
}


export class Appointment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_overlapping" })
  allowOverlapping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=appt_is_break" })
  apptIsBreak?: boolean;

  @SpeakeasyMetadata({ data: "json, name=base_recurring_appointment" })
  baseRecurringAppointment?: string;

  @SpeakeasyMetadata({ data: "json, name=billing_notes", elemType: AppointmentClaimBillingNotes })
  billingNotes?: AppointmentClaimBillingNotes[];

  @SpeakeasyMetadata({ data: "json, name=billing_provider" })
  billingProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=billing_status" })
  billingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=clinical_note" })
  clinicalNote?: AppointmentClinicalNote;

  @SpeakeasyMetadata({ data: "json, name=cloned_from" })
  clonedFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_fields", elemType: AppointmentCustomAppointmentFieldValue })
  customFields?: AppointmentCustomAppointmentFieldValue[];

  @SpeakeasyMetadata({ data: "json, name=custom_vitals", elemType: AppointmentCustomVitalValue })
  customVitals?: AppointmentCustomVitalValue[];

  @SpeakeasyMetadata({ data: "json, name=deleted_flag" })
  deletedFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=exam_room" })
  examRoom: number;

  @SpeakeasyMetadata({ data: "json, name=extended_updated_at" })
  extendedUpdatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=first_billed_date" })
  firstBilledDate?: string;

  @SpeakeasyMetadata({ data: "json, name=icd10_codes" })
  icd10Codes?: string[];

  @SpeakeasyMetadata({ data: "json, name=icd9_codes" })
  icd9Codes?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=ins1_status" })
  ins1Status?: AppointmentIns1StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ins2_status" })
  ins2Status?: AppointmentIns2StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=is_virtual_base" })
  isVirtualBase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_walk_in" })
  isWalkIn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_billed_date" })
  lastBilledDate?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=primary_insurance_id_number" })
  primaryInsuranceIdNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_insurer_name" })
  primaryInsurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_insurer_payer_id" })
  primaryInsurerPayerId?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: number;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=recurring_appointment" })
  recurringAppointment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reminder_profile" })
  reminderProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=reminders", elemType: AppointmentSimpleReminder })
  reminders?: AppointmentSimpleReminder[];

  @SpeakeasyMetadata({ data: "json, name=scheduled_time" })
  scheduledTime: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_insurance_id_number" })
  secondaryInsuranceIdNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_insurer_name" })
  secondaryInsurerName?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary_insurer_payer_id" })
  secondaryInsurerPayerId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AppointmentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_transitions", elemType: AppointmentAppointmentStatusTransition })
  statusTransitions?: AppointmentAppointmentStatusTransition[];

  @SpeakeasyMetadata({ data: "json, name=supervising_provider" })
  supervisingProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=vitals" })
  vitals?: AppointmentSystemVitals;
}
