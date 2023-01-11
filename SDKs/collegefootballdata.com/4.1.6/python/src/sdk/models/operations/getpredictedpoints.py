import dataclasses
from typing import Optional
from ..shared import predictedpoints as shared_predictedpoints


@dataclasses.dataclass
class GetPredictedPointsQueryParams:
    distance: int = dataclasses.field(metadata={'query_param': { 'field_name': 'distance', 'style': 'form', 'explode': True }})
    down: int = dataclasses.field(metadata={'query_param': { 'field_name': 'down', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPredictedPointsRequest:
    query_params: GetPredictedPointsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPredictedPointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    predicted_points: Optional[list[shared_predictedpoints.PredictedPoints]] = dataclasses.field(default=None)
    
