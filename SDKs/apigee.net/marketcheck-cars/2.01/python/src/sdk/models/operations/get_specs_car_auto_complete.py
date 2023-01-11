import dataclasses
from typing import Optional
from enum import Enum
from ..shared import api_key_enum7 as shared_api_key_enum7
from ..shared import error as shared_error
from ..shared import specsautocompleteresponse as shared_specsautocompleteresponse


@dataclasses.dataclass
class GetSpecsCarAutoCompleteQueryParams:
    field: shared_api_key_enum7.APIKeyEnum7 = dataclasses.field(metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    input: str = dataclasses.field(metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_subtype: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body_subtype', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    engine_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine_block', 'style': 'form', 'explode': True }})
    engine_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'engine_size', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    make: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSpecsCarAutoCompleteRequest:
    query_params: GetSpecsCarAutoCompleteQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSpecsCarAutoCompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    specs_auto_complete_response: Optional[shared_specsautocompleteresponse.SpecsAutoCompleteResponse] = dataclasses.field(default=None)
    
