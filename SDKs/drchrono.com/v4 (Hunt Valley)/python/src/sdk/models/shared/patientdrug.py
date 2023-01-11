import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PatientDrugOrderStatusEnum(str, Enum):
    UNKNOWN = ""
    ORDERED = "Ordered"
    ADMINISTERED_DURING_VISIT = "Administered during visit"
    ELECTRONIC_E_RX_SENT = "Electronic eRx Sent"
    PHONED_INTO_PHARMACY = "Phoned into Pharmacy"
    FAXED_TO_PHARMACY = "Faxed to Pharmacy"
    PAPER_RX = "Paper Rx"
    PRESCRIPTION_PRINTED = "Prescription Printed"
    DISCONTINUED = "Discontinued"
    PRESCRIBED_BY_OTHER_DR = "Prescribed by other Dr"
    OVER_THE_COUNTER = "Over the Counter"

class PatientDrugStatusEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"


@dataclass_json
@dataclasses.dataclass
class PatientDrug:
    doctor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    patient: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appointment') }})
    date_prescribed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_prescribed') }})
    date_started_taking: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_started_taking') }})
    date_stopped_taking: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_stopped_taking') }})
    daw: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daw') }})
    dispense_quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispense_quantity') }})
    dosage_quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dosage_quantity') }})
    dosage_units: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dosage_units') }})
    frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequency') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    indication: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indication') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ndc: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndc') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    number_refills: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_refills') }})
    order_status: Optional[PatientDrugOrderStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_status') }})
    pharmacy_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pharmacy_note') }})
    prn: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prn') }})
    route: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route') }})
    rxnorm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxnorm') }})
    signature_note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature_note') }})
    status: Optional[PatientDrugStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
