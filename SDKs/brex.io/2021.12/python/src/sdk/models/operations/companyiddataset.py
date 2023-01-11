import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CompanyIDDatasetDatasetEnum(str, Enum):
    UNKNOWN = ""
    MINI = "mini"
    MASTER = "master"
    FULL = "full"
    REFRESH = "refresh"


@dataclasses.dataclass
class CompanyIDDatasetPathParams:
    dataset: CompanyIDDatasetDatasetEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'dataset', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class CompanyIDDatasetLangEnum(str, Enum):
    UNKNOWN = ""
    EN = "EN"
    ES = "ES"
    FR = "FR"


@dataclasses.dataclass
class CompanyIDDatasetQueryParams:
    check_stock_listing: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'check_stock_listing', 'style': 'form', 'explode': True }})
    lang: Optional[CompanyIDDatasetLangEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CompanyIDDatasetSecurity:
    user_key: shared_security.SchemeUserKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CompanyIDDatasetRequest:
    path_params: CompanyIDDatasetPathParams = dataclasses.field()
    query_params: CompanyIDDatasetQueryParams = dataclasses.field()
    security: CompanyIDDatasetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CompanyIDDatasetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    company_id_dataset_default_application_json_any: Optional[Any] = dataclasses.field(default=None)
    oneapi_1v1_1company_1deepsearch_1lei_1_percent_7_bnumber_percent_7_d_get_responses_200_content_application_1json_schema_properties_company: Optional[Any] = dataclasses.field(default=None)
    
