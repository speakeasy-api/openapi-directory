import dataclasses
from typing import Optional
from ..shared import environmentmodel as shared_environmentmodel
from ..shared import environmentmodel_haljson as shared_environmentmodel_haljson


@dataclasses.dataclass
class GetEnvironmentPathParams:
    environment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnvironmentRequest:
    path_params: GetEnvironmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnvironmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment_model: Optional[shared_environmentmodel.EnvironmentModel] = dataclasses.field(default=None)
    environment_model_haljson: Optional[shared_environmentmodel_haljson.EnvironmentModelHaljson] = dataclasses.field(default=None)
    
