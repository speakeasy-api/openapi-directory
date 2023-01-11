import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getrepositorycatalogdatarequest as shared_getrepositorycatalogdatarequest
from ..shared import getrepositorycatalogdataresponse as shared_getrepositorycatalogdataresponse

class GetRepositoryCatalogDataXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_CATALOG_DATA = "SpencerFrontendService.GetRepositoryCatalogData"


@dataclasses.dataclass
class GetRepositoryCatalogDataHeaders:
    x_amz_target: GetRepositoryCatalogDataXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRepositoryCatalogDataRequest:
    headers: GetRepositoryCatalogDataHeaders = dataclasses.field()
    request: shared_getrepositorycatalogdatarequest.GetRepositoryCatalogDataRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetRepositoryCatalogDataResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_repository_catalog_data_response: Optional[shared_getrepositorycatalogdataresponse.GetRepositoryCatalogDataResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
