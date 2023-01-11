import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assetmodelcompositemodel as shared_assetmodelcompositemodel
from ..shared import assetmodelhierarchy as shared_assetmodelhierarchy
from ..shared import assetmodelproperty as shared_assetmodelproperty
from ..shared import updateassetmodelresponse as shared_updateassetmodelresponse


@dataclasses.dataclass
class UpdateAssetModelPathParams:
    asset_model_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'assetModelId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssetModelHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateAssetModelRequestBody:
    asset_model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelName') }})
    asset_model_composite_models: Optional[list[shared_assetmodelcompositemodel.AssetModelCompositeModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelCompositeModels') }})
    asset_model_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelDescription') }})
    asset_model_hierarchies: Optional[list[shared_assetmodelhierarchy.AssetModelHierarchy]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelHierarchies') }})
    asset_model_properties: Optional[list[shared_assetmodelproperty.AssetModelProperty]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetModelProperties') }})
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

@dataclasses.dataclass
class UpdateAssetModelRequest:
    headers: UpdateAssetModelHeaders = dataclasses.field()
    path_params: UpdateAssetModelPathParams = dataclasses.field()
    request: UpdateAssetModelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAssetModelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflicting_operation_exception: Optional[Any] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    update_asset_model_response: Optional[shared_updateassetmodelresponse.UpdateAssetModelResponse] = dataclasses.field(default=None)
    
