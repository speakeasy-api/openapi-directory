import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import trafficmirrorfilterrulefield_enum as shared_trafficmirrorfilterrulefield_enum

class GetModifyTrafficMirrorFilterRuleActionEnum(str, Enum):
    MODIFY_TRAFFIC_MIRROR_FILTER_RULE = "ModifyTrafficMirrorFilterRule"


@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleDestinationPortRange:
    r"""GetModifyTrafficMirrorFilterRuleDestinationPortRange
    Information about the Traffic Mirror filter rule port range.
    """
    
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetModifyTrafficMirrorFilterRuleRuleActionEnum(str, Enum):
    ACCEPT = "accept"
    REJECT = "reject"


@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleSourcePortRange:
    r"""GetModifyTrafficMirrorFilterRuleSourcePortRange
    Information about the Traffic Mirror filter rule port range.
    """
    
    from_port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FromPort' }})
    to_port: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ToPort' }})
    
class GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum(str, Enum):
    INGRESS = "ingress"
    EGRESS = "egress"

class GetModifyTrafficMirrorFilterRuleVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleQueryParams:
    action: GetModifyTrafficMirrorFilterRuleActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    traffic_mirror_filter_rule_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'TrafficMirrorFilterRuleId', 'style': 'form', 'explode': True }})
    version: GetModifyTrafficMirrorFilterRuleVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    destination_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    destination_port_range: Optional[GetModifyTrafficMirrorFilterRuleDestinationPortRange] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DestinationPortRange', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    protocol: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Protocol', 'style': 'form', 'explode': True }})
    remove_field: Optional[list[shared_trafficmirrorfilterrulefield_enum.TrafficMirrorFilterRuleFieldEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RemoveField', 'style': 'form', 'explode': True }})
    rule_action: Optional[GetModifyTrafficMirrorFilterRuleRuleActionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RuleAction', 'style': 'form', 'explode': True }})
    rule_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'RuleNumber', 'style': 'form', 'explode': True }})
    source_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourceCidrBlock', 'style': 'form', 'explode': True }})
    source_port_range: Optional[GetModifyTrafficMirrorFilterRuleSourcePortRange] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SourcePortRange', 'style': 'form', 'explode': True }})
    traffic_direction: Optional[GetModifyTrafficMirrorFilterRuleTrafficDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'TrafficDirection', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleRequest:
    headers: GetModifyTrafficMirrorFilterRuleHeaders = dataclasses.field()
    query_params: GetModifyTrafficMirrorFilterRuleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetModifyTrafficMirrorFilterRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
