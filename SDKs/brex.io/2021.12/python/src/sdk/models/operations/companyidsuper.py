import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class CompanyIDSuperPathParams:
    country: str = dataclasses.field(metadata={'path_param': { 'field_name': 'country', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class CompanyIDSuperLangEnum(str, Enum):
    UNKNOWN = ""
    OG = "OG"
    EN = "EN"


@dataclasses.dataclass
class CompanyIDSuperQueryParams:
    lang: Optional[CompanyIDSuperLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanyIDSuperSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyIDSuperRequest:
    path_params: CompanyIDSuperPathParams = dataclasses.field()
    query_params: CompanyIDSuperQueryParams = dataclasses.field()
    security: CompanyIDSuperSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyIDSuperResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_id_super_200_application_json_anies: Optional[list[Any]] = dataclasses.field(default=None)
    company_id_super_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
