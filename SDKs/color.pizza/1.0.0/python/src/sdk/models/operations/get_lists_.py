"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from ..shared import listdescription as shared_listdescription
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetLists200ApplicationJSONListDescriptions:
    
    basic: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('basic'), 'exclude': lambda f: f is None }})  
    best_of: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('bestOf'), 'exclude': lambda f: f is None }})  
    chinese_traditional: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('chineseTraditional'), 'exclude': lambda f: f is None }})  
    default: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('default'), 'exclude': lambda f: f is None }})  
    french: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('french'), 'exclude': lambda f: f is None }})  
    html: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('html'), 'exclude': lambda f: f is None }})  
    japanese_traditional: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('japaneseTraditional'), 'exclude': lambda f: f is None }})  
    le_corbusier: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('leCorbusier'), 'exclude': lambda f: f is None }})  
    nbs_iscc: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('nbsIscc'), 'exclude': lambda f: f is None }})  
    ntc: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ntc'), 'exclude': lambda f: f is None }})  
    osxcrayons: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('osxcrayons'), 'exclude': lambda f: f is None }})  
    ral: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ral'), 'exclude': lambda f: f is None }})  
    ridgway: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ridgway'), 'exclude': lambda f: f is None }})  
    risograph: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('risograph'), 'exclude': lambda f: f is None }})  
    sanzo_wada_i: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sanzoWadaI'), 'exclude': lambda f: f is None }})  
    thesaurus: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('thesaurus'), 'exclude': lambda f: f is None }})  
    werner: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('werner'), 'exclude': lambda f: f is None }})  
    wikipedia: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('wikipedia'), 'exclude': lambda f: f is None }})  
    windows: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('windows'), 'exclude': lambda f: f is None }})  
    x11: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('x11'), 'exclude': lambda f: f is None }})  
    xkcd: Optional[shared_listdescription.ListDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('xkcd'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetLists200ApplicationJSON:
    r"""OK"""
    
    list_descriptions: Optional[GetLists200ApplicationJSONListDescriptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('listDescriptions'), 'exclude': lambda f: f is None }})  
    local_available_color_name_lists: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('localAvailableColorNameLists'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetListsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""NOT FOUND"""  
    get_lists_200_application_json_object: Optional[GetLists200ApplicationJSON] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    