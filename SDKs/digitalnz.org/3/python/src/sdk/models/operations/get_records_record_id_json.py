import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import record as shared_record


@dataclasses.dataclass
class GetRecordsRecordIDJSONPathParams:
    record_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'record_id', 'style': 'simple', 'explode': False }})
    
class GetRecordsRecordIDJSONFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclasses.dataclass
class GetRecordsRecordIDJSONQueryParams:
    api_key: str = dataclasses.field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    format: GetRecordsRecordIDJSONFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetRecordsRecordIDJSONRequest:
    path_params: GetRecordsRecordIDJSONPathParams = dataclasses.field()
    query_params: GetRecordsRecordIDJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRecordsRecordIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    get_records_record_id_json_403_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    get_records_record_id_json_404_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    record: Optional[shared_record.Record] = dataclasses.field(default=None)
    
