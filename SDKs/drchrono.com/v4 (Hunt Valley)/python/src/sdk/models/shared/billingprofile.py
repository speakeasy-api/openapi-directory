import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BillingProfileCptCodesNdcCodeUnitsEnum(str, Enum):
    F2 = "F2"
    GR = "GR"
    ME = "ME"
    ML = "ML"
    UN = "UN"


@dataclass_json
@dataclasses.dataclass
class BillingProfileCptCodesNdcCode:
    r"""BillingProfileCptCodesNdcCode
    NDC code object
    """
    
    ndc_package_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndc_package_code') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    units: Optional[BillingProfileCptCodesNdcCodeUnitsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    

@dataclass_json
@dataclasses.dataclass
class BillingProfileCptCodes:
    r"""BillingProfileCptCodes
    CPT Code object
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    diagnosis_pointers_icd10: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosis_pointers_icd10') }})
    diagnosis_pointers_icd9: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosis_pointers_icd9') }})
    modifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiers') }})
    ndc_code: Optional[list[BillingProfileCptCodesNdcCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndc_code') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclasses.dataclass
class BillingProfileCustomProcedureCodes:
    r"""BillingProfileCustomProcedureCodes
    Custom procedure code object
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
class BillingProfileHcpcsCodesNdcCodeUnitsEnum(str, Enum):
    F2 = "F2"
    GR = "GR"
    ME = "ME"
    ML = "ML"
    UN = "UN"


@dataclass_json
@dataclasses.dataclass
class BillingProfileHcpcsCodesNdcCode:
    r"""BillingProfileHcpcsCodesNdcCode
    NDC code object
    """
    
    ndc_package_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndc_package_code') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    units: Optional[BillingProfileHcpcsCodesNdcCodeUnitsEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    

@dataclass_json
@dataclasses.dataclass
class BillingProfileHcpcsCodes:
    r"""BillingProfileHcpcsCodes
    HCPCS code object
    """
    
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    diagnosis_pointers_icd10: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosis_pointers_icd10') }})
    diagnosis_pointers_icd9: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diagnosis_pointers_icd9') }})
    modifiers: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiers') }})
    ndc_code: Optional[list[BillingProfileHcpcsCodesNdcCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ndc_code') }})
    price: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    quantity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    

@dataclass_json
@dataclasses.dataclass
class BillingProfile:
    archived: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    cpt_codes: Optional[list[BillingProfileCptCodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpt_codes') }})
    created_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    custom_procedure_codes: Optional[list[BillingProfileCustomProcedureCodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_procedure_codes') }})
    doctor: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doctor') }})
    hcpcs_codes: Optional[list[BillingProfileHcpcsCodes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hcpcs_codes') }})
    icd10_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icd10_codes') }})
    icd9_codes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icd9_codes') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    updated_at: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
