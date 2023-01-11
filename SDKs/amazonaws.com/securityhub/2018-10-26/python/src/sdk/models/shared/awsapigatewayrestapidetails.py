import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsapigatewayendpointconfiguration as shared_awsapigatewayendpointconfiguration


@dataclass_json
@dataclasses.dataclass
class AwsAPIGatewayRestAPIDetails:
    r"""AwsAPIGatewayRestAPIDetails
    Contains information about a REST API in version 1 of Amazon API Gateway.
    """
    
    api_key_source: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApiKeySource') }})
    binary_media_types: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BinaryMediaTypes') }})
    created_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    endpoint_configuration: Optional[shared_awsapigatewayendpointconfiguration.AwsAPIGatewayEndpointConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointConfiguration') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    minimum_compression_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinimumCompressionSize') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
