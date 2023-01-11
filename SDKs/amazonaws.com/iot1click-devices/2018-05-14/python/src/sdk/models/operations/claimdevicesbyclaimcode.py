import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import claimdevicesbyclaimcoderesponse as shared_claimdevicesbyclaimcoderesponse


@dataclasses.dataclass
class ClaimDevicesByClaimCodePathParams:
    claim_code: str = dataclasses.field(metadata={'path_param': { 'field_name': 'claimCode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClaimDevicesByClaimCodeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ClaimDevicesByClaimCodeRequest:
    headers: ClaimDevicesByClaimCodeHeaders = dataclasses.field()
    path_params: ClaimDevicesByClaimCodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ClaimDevicesByClaimCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    claim_devices_by_claim_code_response: Optional[shared_claimdevicesbyclaimcoderesponse.ClaimDevicesByClaimCodeResponse] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
