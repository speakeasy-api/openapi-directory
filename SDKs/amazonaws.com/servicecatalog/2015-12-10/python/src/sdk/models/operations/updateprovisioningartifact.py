import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateprovisioningartifactinput as shared_updateprovisioningartifactinput
from ..shared import updateprovisioningartifactoutput as shared_updateprovisioningartifactoutput

class UpdateProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_UPDATE_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.UpdateProvisioningArtifact"


@dataclasses.dataclass
class UpdateProvisioningArtifactHeaders:
    x_amz_target: UpdateProvisioningArtifactXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateProvisioningArtifactRequest:
    headers: UpdateProvisioningArtifactHeaders = dataclasses.field()
    request: shared_updateprovisioningartifactinput.UpdateProvisioningArtifactInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateProvisioningArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_provisioning_artifact_output: Optional[shared_updateprovisioningartifactoutput.UpdateProvisioningArtifactOutput] = dataclasses.field(default=None)
    
