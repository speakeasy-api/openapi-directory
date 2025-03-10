"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import category_rated_areas as shared_category_rated_areas
from ..shared import error_400 as shared_error_400
from ..shared import error_500 as shared_error_500
from ..shared import meta as shared_meta
from ..shared import warning as shared_warning
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class GetCategoryRatedAreasRequest:
    
    latitude: float = dataclasses.field(metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    r"""Latitude in decimal coordinates"""  
    longitude: float = dataclasses.field(metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    r"""Longitude in decimal coordinates"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSON:
    r"""Successful Reply"""
    
    data: Optional[list[shared_category_rated_areas.CategoryRatedAreas]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data'), 'exclude': lambda f: f is None }})  
    meta: Optional[shared_meta.Meta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('meta'), 'exclude': lambda f: f is None }})
    r"""Meta information about the returned object(s) in \\"data\\" """  
    warnings: Optional[list[shared_warning.WarningT]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('warnings'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetCategoryRatedAreasResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_400: Optional[shared_error_400.Error400] = dataclasses.field(default=None)
    r"""code    | title
    ------- | ------------------------------------- 
    477     | INVALID FORMAT
    572     | INVALID OPTION                            
    32171   | MANDATORY DATA MISSING
    """  
    error_500: Optional[shared_error_500.Error500] = dataclasses.field(default=None)
    r"""Internal Server Error"""  
    get_category_rated_areas_200_application_vnd_amadeus_plus_json_object: Optional[GetCategoryRatedAreas200ApplicationVndAmadeusPlusJSON] = dataclasses.field(default=None)
    r"""Successful Reply"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    