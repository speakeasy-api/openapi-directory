import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import soapnotelineitemfieldvalue as shared_soapnotelineitemfieldvalue


@dataclasses.dataclass
class ClinicalNoteFieldValuesListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    clinical_note_field: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_field', 'style': 'form', 'explode': True }})
    clinical_note_template: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clinical_note_template', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ClinicalNoteFieldValuesList200ApplicationJSON:
    r"""ClinicalNoteFieldValuesList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_soapnotelineitemfieldvalue.SoapNoteLineItemFieldValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesListRequest:
    query_params: ClinicalNoteFieldValuesListQueryParams = dataclasses.field()
    security: ClinicalNoteFieldValuesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ClinicalNoteFieldValuesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clinical_note_field_values_list_200_application_json_object: Optional[ClinicalNoteFieldValuesList200ApplicationJSON] = dataclasses.field(default=None)
    
