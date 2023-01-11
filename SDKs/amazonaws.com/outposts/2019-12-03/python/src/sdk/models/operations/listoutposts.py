import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listoutpostsoutput as shared_listoutpostsoutput


@dataclasses.dataclass
class ListOutpostsQueryParams:
    availability_zone_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneFilter', 'style': 'form', 'explode': True }})
    availability_zone_id_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'AvailabilityZoneIdFilter', 'style': 'form', 'explode': True }})
    life_cycle_status_filter: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'LifeCycleStatusFilter', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOutpostsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOutpostsRequest:
    headers: ListOutpostsHeaders = dataclasses.field()
    query_params: ListOutpostsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListOutpostsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_outposts_output: Optional[shared_listoutpostsoutput.ListOutpostsOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
