import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class SearchTypeMetametaDictionaryQueryParams:
    changedate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_dictionary_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.dictionary_type', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_field_index: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.field_index', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_handler_class: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.handler_class', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_isgroup: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.isgroup', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_properties: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.properties', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_short_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.short_name', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_super_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.super_type', 'style': 'form', 'explode': True }})
    search_type_metameta_dictionary_wiki_text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_dictionary.wiki_text', 'style': 'form', 'explode': True }})
    skip: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class SearchTypeMetametaDictionaryRequest:
    query_params: SearchTypeMetametaDictionaryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchTypeMetametaDictionaryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
