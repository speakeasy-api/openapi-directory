import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createprovisioningartifactinput as shared_createprovisioningartifactinput
from ..shared import createprovisioningartifactoutput as shared_createprovisioningartifactoutput

class CreateProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_CREATE_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.CreateProvisioningArtifact"


@dataclasses.dataclass
class CreateProvisioningArtifactHeaders:
    x_amz_target: CreateProvisioningArtifactXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateProvisioningArtifactRequest:
    headers: CreateProvisioningArtifactHeaders = dataclasses.field()
    request: shared_createprovisioningartifactinput.CreateProvisioningArtifactInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateProvisioningArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_provisioning_artifact_output: Optional[shared_createprovisioningartifactoutput.CreateProvisioningArtifactOutput] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
