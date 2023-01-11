import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class DeleteRecordPathParams:
    feature_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'FeatureGroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRecordQueryParams:
    event_time: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EventTime', 'style': 'form', 'explode': True }})
    record_identifier_value_as_string: str = dataclasses.field(metadata={'query_param': { 'field_name': 'RecordIdentifierValueAsString', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteRecordHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteRecordRequest:
    headers: DeleteRecordHeaders = dataclasses.field()
    path_params: DeleteRecordPathParams = dataclasses.field()
    query_params: DeleteRecordQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteRecordResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_forbidden: Optional[Any] = dataclasses.field(default=None)
    internal_failure: Optional[Any] = dataclasses.field(default=None)
    service_unavailable: Optional[Any] = dataclasses.field(default=None)
    validation_error: Optional[Any] = dataclasses.field(default=None)
    
