import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updateenvironmentmodel as shared_updateenvironmentmodel
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import environmentmodel_haljson as shared_environmentmodel_haljson


@dataclasses.dataclass
class UpdateEnvironmentPathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateEnvironmentRequests:
    update_environment_model: Optional[shared_updateenvironmentmodel.UpdateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_environment_model1: Optional[shared_updateenvironmentmodel.UpdateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_environment_model2: Optional[shared_updateenvironmentmodel.UpdateEnvironmentModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class UpdateEnvironmentRequest:
    path_params: UpdateEnvironmentPathParams = dataclasses.field()
    request: UpdateEnvironmentRequests = dataclasses.field()
    

@dataclasses.dataclass
class UpdateEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment_model: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None)
    environment_model_haljson: Optional[shared_environmentmodel_haljson.EnvironmentModelHaljson] = dataclasses.field(default=None)
    
