import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import trafficmirrorsessionfield_enum as shared_trafficmirrorsessionfield_enum

class GetModifyTrafficMirrorSessionActionEnum(str, Enum):
    MODIFY_TRAFFIC_MIRROR_SESSION = "ModifyTrafficMirrorSession"

class GetModifyTrafficMirrorSessionVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyTrafficMirrorSessionQueryParams:
    action: GetModifyTrafficMirrorSessionActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    traffic_mirror_session_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TrafficMirrorSessionId', 'style': 'form', 'explode': True }})
    version: GetModifyTrafficMirrorSessionVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    packet_length: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PacketLength', 'style': 'form', 'explode': True }})
    remove_field: Optional[list[shared_trafficmirrorsessionfield_enum.TrafficMirrorSessionFieldEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RemoveField', 'style': 'form', 'explode': True }})
    session_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SessionNumber', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorFilterId', 'style': 'form', 'explode': True }})
    traffic_mirror_target_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TrafficMirrorTargetId', 'style': 'form', 'explode': True }})
    virtual_network_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'VirtualNetworkId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyTrafficMirrorSessionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyTrafficMirrorSessionRequest:
    headers: GetModifyTrafficMirrorSessionHeaders = dataclasses.field()
    query_params: GetModifyTrafficMirrorSessionQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyTrafficMirrorSessionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
