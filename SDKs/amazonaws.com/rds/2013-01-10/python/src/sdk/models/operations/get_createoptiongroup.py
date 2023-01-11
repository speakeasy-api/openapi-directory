import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateOptionGroupActionEnum(str, Enum):
    CREATE_OPTION_GROUP = "CreateOptionGroup"

class GetCreateOptionGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_THIRTEEN_01_10 = "2013-01-10"


@dataclasses.dataclass
class GetCreateOptionGroupQueryParams:
    action: GetCreateOptionGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    engine_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'EngineName', 'style': 'form', 'explode': True }})
    major_engine_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'MajorEngineVersion', 'style': 'form', 'explode': True }})
    option_group_description: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OptionGroupDescription', 'style': 'form', 'explode': True }})
    option_group_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'OptionGroupName', 'style': 'form', 'explode': True }})
    version: GetCreateOptionGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateOptionGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateOptionGroupRequest:
    headers: GetCreateOptionGroupHeaders = dataclasses.field()
    query_params: GetCreateOptionGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateOptionGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
