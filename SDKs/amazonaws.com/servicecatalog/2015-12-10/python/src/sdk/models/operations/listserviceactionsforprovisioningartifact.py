import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listserviceactionsforprovisioningartifactinput as shared_listserviceactionsforprovisioningartifactinput
from ..shared import listserviceactionsforprovisioningartifactoutput as shared_listserviceactionsforprovisioningartifactoutput


@dataclasses.dataclass
class ListServiceActionsForProvisioningArtifactQueryParams:
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageToken', 'style': 'form', 'explode': True }})
    
class ListServiceActionsForProvisioningArtifactXAmzTargetEnum(str, Enum):
    AWS242_SERVICE_CATALOG_SERVICE_LIST_SERVICE_ACTIONS_FOR_PROVISIONING_ARTIFACT = "AWS242ServiceCatalogService.ListServiceActionsForProvisioningArtifact"


@dataclasses.dataclass
class ListServiceActionsForProvisioningArtifactHeaders:
    x_amz_target: ListServiceActionsForProvisioningArtifactXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServiceActionsForProvisioningArtifactRequest:
    headers: ListServiceActionsForProvisioningArtifactHeaders = dataclasses.field()
    query_params: ListServiceActionsForProvisioningArtifactQueryParams = dataclasses.field()
    request: shared_listserviceactionsforprovisioningartifactinput.ListServiceActionsForProvisioningArtifactInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListServiceActionsForProvisioningArtifactResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameters_exception: Optional[Any] = dataclasses.field(default=None)
    list_service_actions_for_provisioning_artifact_output: Optional[shared_listserviceactionsforprovisioningartifactoutput.ListServiceActionsForProvisioningArtifactOutput] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
