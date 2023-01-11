import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeorganizationconformancepacksrequest as shared_describeorganizationconformancepacksrequest
from ..shared import describeorganizationconformancepacksresponse as shared_describeorganizationconformancepacksresponse


@dataclasses.dataclass
class DescribeOrganizationConformancePacksQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeOrganizationConformancePacksXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_ORGANIZATION_CONFORMANCE_PACKS = "StarlingDoveService.DescribeOrganizationConformancePacks"


@dataclasses.dataclass
class DescribeOrganizationConformancePacksHeaders:
    x_amz_target: DescribeOrganizationConformancePacksXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeOrganizationConformancePacksRequest:
    headers: DescribeOrganizationConformancePacksHeaders = dataclasses.field()
    query_params: DescribeOrganizationConformancePacksQueryParams = dataclasses.field()
    request: shared_describeorganizationconformancepacksrequest.DescribeOrganizationConformancePacksRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeOrganizationConformancePacksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_organization_conformance_packs_response: Optional[shared_describeorganizationconformancepacksresponse.DescribeOrganizationConformancePacksResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_organization_conformance_pack_exception: Optional[Any] = dataclasses.field(default=None)
    organization_access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    
