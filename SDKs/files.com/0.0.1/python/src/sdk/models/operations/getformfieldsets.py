import dataclasses
from typing import Optional
from ..shared import formfieldsetentity as shared_formfieldsetentity


@dataclasses.dataclass
class GetFormFieldSetsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFormFieldSetsRequest:
    query_params: GetFormFieldSetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFormFieldSetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    form_field_set_entities: Optional[list[shared_formfieldsetentity.FormFieldSetEntity]] = dataclasses.field(default=None)
    
