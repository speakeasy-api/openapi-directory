import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchassociateserviceactionwithprovisioningartifactinput as shared_batchassociateserviceactionwithprovisioningartifactinput
from ..shared import batchassociateserviceactionwithprovisioningartifactoutput as shared_batchassociateserviceactionwithprovisioningartifactoutput

class BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_BATCH_ASSOCIATE_SERVICE_ACTION_WITH_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.BatchAssociateServiceActionWithProvisioningArtifact"


@dataclasses.dataclass
class BatchAssociateServiceActionWithProvisioningArtifactHeaders:
    x_amz_target: BatchAssociateServiceActionWithProvisioningArtifactXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchAssociateServiceActionWithProvisioningArtifactRequest:
    headers: BatchAssociateServiceActionWithProvisioningArtifactHeaders = dataclasses.field()
    request: shared_batchassociateserviceactionwithprovisioningartifactinput.BatchAssociateServiceActionWithProvisioningArtifactInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchAssociateServiceActionWithProvisioningArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_associate_service_action_with_provisioning_artifact_output: Optional[shared_batchassociateserviceactionwithprovisioningartifactoutput.BatchAssociateServiceActionWithProvisioningArtifactOutput] = dataclasses.field(default=None)
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    
