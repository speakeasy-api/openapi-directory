import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import describeprovisioningtemplateversionresponse as shared_describeprovisioningtemplateversionresponse


@dataclasses.dataclass
class DescribeProvisioningTemplateVersionPathParams:
    template_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'templateName', 'style': 'simple', 'explode': False }})
    version_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeProvisioningTemplateVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeProvisioningTemplateVersionRequest:
    headers: DescribeProvisioningTemplateVersionHeaders = dataclasses.field()
    path_params: DescribeProvisioningTemplateVersionPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DescribeProvisioningTemplateVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_provisioning_template_version_response: Optional[shared_describeprovisioningtemplateversionresponse.DescribeProvisioningTemplateVersionResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
