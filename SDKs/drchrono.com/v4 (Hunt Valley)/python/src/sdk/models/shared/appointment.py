import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AppointmentClaimBillingNotes:
    r"""AppointmentClaimBillingNotes
    Structure of a billing note
    """
    
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclasses.dataclass
class AppointmentClinicalNote:
    r"""AppointmentClinicalNote
    Associated clinical note object
    """
    
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    pdf: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pdf') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

@dataclass_json
@dataclasses.dataclass
class AppointmentCustomAppointmentFieldValue:
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    field_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_type') }})
    field_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field_value') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

@dataclass_json
@dataclasses.dataclass
class AppointmentCustomVitalValue:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    vital_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vital_type') }})
    
class AppointmentIns1StatusEnum(str, Enum):
    UNKNOWN = ""
    INCOMPLETE_INFORMATION = "Incomplete Information"
    IN_PROCESS_EMDEON = "In Process Emdeon"
    REJECTED_EMDEON = "Rejected Emdeon"
    REJECTED_JOPARI = "Rejected Jopari"
    IN_PROCESS_PAYOR = "In Process Payor"
    REJECTED_WAYSTAR_PROFESSIONAL = "Rejected Waystar Professional"
    REJECTED_WAYSTAR_INSTITUTIONAL = "Rejected Waystar Institutional"
    IN_PROCESS_PAYER = "In Process Payer"
    PAYER_ACKNOWLEDGED = "Payer Acknowledged"
    REJECTED_PAYOR = "Rejected Payor"
    REJECTED_PAYER = "Rejected Payer"
    PAID_IN_FULL = "Paid in Full"
    PARTIALLY_PAID = "Partially Paid"
    COORDINATION_OF_BENEFITS = "Coordination of Benefits"
    ERA_RECEIVED = "ERA Received"
    ERA_DENIED = "ERA Denied"
    HCFA_FORM_FAXED = "HCFA Form Faxed"

class AppointmentIns2StatusEnum(str, Enum):
    UNKNOWN = ""
    INCOMPLETE_INFORMATION = "Incomplete Information"
    IN_PROCESS_EMDEON = "In Process Emdeon"
    REJECTED_EMDEON = "Rejected Emdeon"
    REJECTED_JOPARI = "Rejected Jopari"
    IN_PROCESS_PAYOR = "In Process Payor"
    REJECTED_WAYSTAR_PROFESSIONAL = "Rejected Waystar Professional"
    REJECTED_WAYSTAR_INSTITUTIONAL = "Rejected Waystar Institutional"
    IN_PROCESS_PAYER = "In Process Payer"
    PAYER_ACKNOWLEDGED = "Payer Acknowledged"
    REJECTED_PAYOR = "Rejected Payor"
    REJECTED_PAYER = "Rejected Payer"
    PAID_IN_FULL = "Paid in Full"
    PARTIALLY_PAID = "Partially Paid"
    COORDINATION_OF_BENEFITS = "Coordination of Benefits"
    ERA_RECEIVED = "ERA Received"
    ERA_DENIED = "ERA Denied"
    HCFA_FORM_FAXED = "HCFA Form Faxed"

class AppointmentSimpleReminderTypeEnum(str, Enum):
    EMAIL = "email"
    SMS = "sms"
    PHONE = "phone"
    AUTO_CALL = "auto_call"


@dataclass_json
@dataclasses.dataclass
class AppointmentSimpleReminder:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scheduled_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_time') }})
    type: Optional[AppointmentSimpleReminderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class AppointmentStatusEnum(str, Enum):
    UNKNOWN = ""
    ARRIVED = "Arrived"
    CHECKED_IN = "Checked In"
    CHECKED_IN_ONLINE = "Checked In Online"
    IN_ROOM = "In Room"
    IN_SESSION = "In Session"
    COMPLETE = "Complete"
    CONFIRMED = "Confirmed"
    NOT_CONFIRMED = "Not Confirmed"
    RESCHEDULED = "Rescheduled"
    CANCELLED = "Cancelled"
    NO_SHOW = "No Show"


@dataclass_json
@dataclasses.dataclass
class AppointmentAppointmentStatusTransition:
    appointment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    datetime: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datetime') }})
    from_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('from_status') }})
    to_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('to_status') }})
    
class AppointmentSystemVitalsSmokingStatusEnum(str, Enum):
    BLANK = "blank"
    FOUR_HUNDRED_AND_FORTY_NINE_MILLION_EIGHT_HUNDRED_AND_SIXTY_EIGHT_THOUSAND_AND_TWO = "449868002"
    FOUR_HUNDRED_AND_TWENTY_EIGHT_TRILLION_FORTY_ONE_BILLION_ONE_HUNDRED_AND_TWENTY_FOUR_THOUSAND_ONE_HUNDRED_AND_SIX = "428041000124106"
    EIGHT_MILLION_FIVE_HUNDRED_AND_SEVENTEEN_THOUSAND_AND_SIX = "8517006"
    TWO_HUNDRED_AND_SIXTY_SIX_MILLION_NINE_HUNDRED_AND_NINETEEN_THOUSAND_AND_FIVE = "266919005"
    SEVENTY_SEVEN_MILLION_ONE_HUNDRED_AND_SEVENTY_SIX_THOUSAND_AND_TWO = "77176002"
    TWO_HUNDRED_AND_SIXTY_SIX_MILLION_NINE_HUNDRED_AND_TWENTY_SEVEN_THOUSAND_AND_ONE = "266927001"
    FOUR_HUNDRED_AND_TWENTY_EIGHT_TRILLION_SEVENTY_ONE_BILLION_ONE_HUNDRED_AND_TWENTY_FOUR_THOUSAND_ONE_HUNDRED_AND_THREE = "428071000124103"
    FOUR_HUNDRED_AND_TWENTY_EIGHT_TRILLION_SIXTY_ONE_BILLION_ONE_HUNDRED_AND_TWENTY_FOUR_THOUSAND_ONE_HUNDRED_AND_FIVE = "428061000124105"


@dataclass_json
@dataclasses.dataclass
class AppointmentSystemVitals:
    r"""AppointmentSystemVitals
    Clinical vitals associated with the appointment
    """
    
    blood_pressure_1: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blood_pressure_1') }})
    blood_pressure_2: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blood_pressure_2') }})
    bmi: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bmi') }})
    head_circumference: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_circumference') }})
    head_circumference_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('head_circumference_units') }})
    height: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    height_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height_units') }})
    oxygen_saturation: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oxygen_saturation') }})
    pain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pain') }})
    pulse: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pulse') }})
    respiratory_rate: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respiratory_rate') }})
    smoking_status: Optional[AppointmentSystemVitalsSmokingStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smoking_status') }})
    temperature: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperature') }})
    temperature_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperature_units') }})
    weight: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    weight_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight_units') }})
    

@dataclass_json
@dataclasses.dataclass
class Appointment:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    exam_room: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exam_room') }})
    office: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('office') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    scheduled_time: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduled_time') }})
    allow_overlapping: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allow_overlapping') }})
    appt_is_break: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appt_is_break') }})
    base_recurring_appointment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base_recurring_appointment') }})
    billing_notes: Optional[list[AppointmentClaimBillingNotes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_notes') }})
    billing_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_provider') }})
    billing_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_status') }})
    clinical_note: Optional[AppointmentClinicalNote] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clinical_note') }})
    cloned_from: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloned_from') }})
    color: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    custom_fields: Optional[list[AppointmentCustomAppointmentFieldValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    custom_vitals: Optional[list[AppointmentCustomVitalValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_vitals') }})
    deleted_flag: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted_flag') }})
    duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    extended_updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extended_updated_at') }})
    first_billed_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_billed_date') }})
    icd10_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icd10_codes') }})
    icd9_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icd9_codes') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ins1_status: Optional[AppointmentIns1StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins1_status') }})
    ins2_status: Optional[AppointmentIns2StatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ins2_status') }})
    is_virtual_base: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_virtual_base') }})
    is_walk_in: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_walk_in') }})
    last_billed_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_billed_date') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    primary_insurance_id_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_insurance_id_number') }})
    primary_insurer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_insurer_name') }})
    primary_insurer_payer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_insurer_payer_id') }})
    profile: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    recurring_appointment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurring_appointment') }})
    reminder_profile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminder_profile') }})
    reminders: Optional[list[AppointmentSimpleReminder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminders') }})
    secondary_insurance_id_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_insurance_id_number') }})
    secondary_insurer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_insurer_name') }})
    secondary_insurer_payer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary_insurer_payer_id') }})
    status: Optional[AppointmentStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_transitions: Optional[list[AppointmentAppointmentStatusTransition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_transitions') }})
    supervising_provider: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supervising_provider') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    vitals: Optional[AppointmentSystemVitals] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vitals') }})
    
