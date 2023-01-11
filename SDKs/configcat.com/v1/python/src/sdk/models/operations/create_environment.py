import dataclasses
from typing import Optional
from ..shared import createenvironmentmodel as shared_createenvironmentmodel
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import environmentmodel_haljson as shared_environmentmodel_haljson


@dataclasses.dataclass
class CreateEnvironmentPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateEnvironmentRequests:
    create_environment_model: Optional[shared_createenvironmentmodel.CreateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_environment_model1: Optional[shared_createenvironmentmodel.CreateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_environment_model2: Optional[shared_createenvironmentmodel.CreateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class CreateEnvironmentRequest:
    path_params: CreateEnvironmentPathParams = dataclasses.field()
    request: CreateEnvironmentRequests = dataclasses.field()
    

@dataclasses.dataclass
class CreateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment_model: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None)
    environment_model_haljson: Optional[shared_environmentmodel_haljson.EnvironmentModelHaljson] = dataclasses.field(default=None)
    
