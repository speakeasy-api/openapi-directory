import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import describeendpointsettingsmessage as shared_describeendpointsettingsmessage
from ..shared import describeendpointsettingsresponse as shared_describeendpointsettingsresponse


@dataclasses.dataclass
class DescribeEndpointSettingsQueryParams:
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_records: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxRecords', 'style': 'form', 'explode': True }})
    
class DescribeEndpointSettingsXAmzTargetEnum(str, Enum):
    AMAZON_DM_SV20160101_DESCRIBE_ENDPOINT_SETTINGS = "AmazonDMSv20160101.DescribeEndpointSettings"


@dataclasses.dataclass
class DescribeEndpointSettingsHeaders:
    x_amz_target: DescribeEndpointSettingsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeEndpointSettingsRequest:
    headers: DescribeEndpointSettingsHeaders = dataclasses.field()
    query_params: DescribeEndpointSettingsQueryParams = dataclasses.field()
    request: shared_describeendpointsettingsmessage.DescribeEndpointSettingsMessage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeEndpointSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_endpoint_settings_response: Optional[shared_describeendpointsettingsresponse.DescribeEndpointSettingsResponse] = dataclasses.field(default=None)
    
