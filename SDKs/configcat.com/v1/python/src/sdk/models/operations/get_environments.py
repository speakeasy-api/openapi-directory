import dataclasses
from typing import Optional
from ..shared import environmentmodel_haljson as shared_environmentmodel_haljson
from ..shared import environmentmodel as shared_environmentmodel


@dataclasses.dataclass
class GetEnvironmentsPathParams:
    product_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnvironmentsRequest:
    path_params: GetEnvironmentsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnvironmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    environment_model_haljsons: Optional[list[shared_environmentmodel_haljson.EnvironmentModelHaljson]] = dataclasses.field(default=None)
    environment_models: Optional[list[shared_environmentmodel.EnvironmentModel]] = dataclasses.field(default=None)
    
