import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createmapresponse as shared_createmapresponse


@dataclasses.dataclass
class CreateMapHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateMapRequestBodyConfiguration:
    r"""CreateMapRequestBodyConfiguration
    Specifies the map tile style selected from an available provider.
    """
    
    style: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Style') }})
    
class CreateMapRequestBodyPricingPlanEnum(str, Enum):
    REQUEST_BASED_USAGE = "RequestBasedUsage"
    MOBILE_ASSET_TRACKING = "MobileAssetTracking"
    MOBILE_ASSET_MANAGEMENT = "MobileAssetManagement"


@dataclass_json
@dataclasses.dataclass
class CreateMapRequestBody:
    configuration: CreateMapRequestBodyConfiguration = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configuration') }})
    map_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MapName') }})
    pricing_plan: CreateMapRequestBodyPricingPlanEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PricingPlan') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    

@dataclasses.dataclass
class CreateMapRequest:
    headers: CreateMapHeaders = dataclasses.field()
    request: CreateMapRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateMapResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_map_response: Optional[shared_createmapresponse.CreateMapResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
