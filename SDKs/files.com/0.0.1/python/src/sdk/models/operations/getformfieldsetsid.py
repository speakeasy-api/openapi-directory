import dataclasses
from typing import Optional
from ..shared import formfieldsetentity as shared_formfieldsetentity


@dataclasses.dataclass
class GetFormFieldSetsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetFormFieldSetsIDRequest:
    path_params: GetFormFieldSetsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFormFieldSetsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_field_set_entity: Optional[shared_formfieldsetentity.FormFieldSetEntity] = dataclasses.field(default=None)
    
