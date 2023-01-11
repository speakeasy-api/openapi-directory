import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateConfigurationSetActionEnum(str, Enum):
    CREATE_CONFIGURATION_SET = "CreateConfigurationSet"


@dataclasses.dataclass
class GetCreateConfigurationSetConfigurationSet:
    r"""GetCreateConfigurationSetConfigurationSet
    <p>The name of the configuration set.</p> <p>Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/using-configuration-sets.html\">Using Amazon SES Configuration Sets</a> in the <a href=\"https://docs.aws.amazon.com/ses/latest/DeveloperGuide/\">Amazon SES Developer Guide</a>.</p>
    """
    
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Name' }})
    
class GetCreateConfigurationSetVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_12_01 = "2010-12-01"


@dataclasses.dataclass
class GetCreateConfigurationSetQueryParams:
    action: GetCreateConfigurationSetActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    configuration_set: GetCreateConfigurationSetConfigurationSet = dataclasses.field(metadata={'query_param': { 'field_name': 'ConfigurationSet', 'style': 'form', 'explode': True }})
    version: GetCreateConfigurationSetVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetCreateConfigurationSetHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCreateConfigurationSetRequest:
    headers: GetCreateConfigurationSetHeaders = dataclasses.field()
    query_params: GetCreateConfigurationSetQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCreateConfigurationSetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
