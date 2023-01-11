import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelcompositemodeldefinition as shared_assetmodelcompositemodeldefinition
from ..shared import assetmodelhierarchydefinition as shared_assetmodelhierarchydefinition
from ..shared import assetmodelpropertydefinition as shared_assetmodelpropertydefinition
from ..shared import createassetmodelresponse as shared_createassetmodelresponse


@dataclasses.dataclass
class CreateAssetModelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateAssetModelRequestBody:
    asset_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelName') }})
    asset_model_composite_models: Optional[list[shared_assetmodelcompositemodeldefinition.AssetModelCompositeModelDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCompositeModels') }})
    asset_model_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelDescription') }})
    asset_model_hierarchies: Optional[list[shared_assetmodelhierarchydefinition.AssetModelHierarchyDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelHierarchies') }})
    asset_model_properties: Optional[list[shared_assetmodelpropertydefinition.AssetModelPropertyDefinition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelProperties') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclasses.dataclass
class CreateAssetModelRequest:
    headers: CreateAssetModelHeaders = dataclasses.field()
    request: CreateAssetModelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAssetModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_operation_exception: Optional[Any] = dataclasses.field(default=None)
    create_asset_model_response: Optional[shared_createassetmodelresponse.CreateAssetModelResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
