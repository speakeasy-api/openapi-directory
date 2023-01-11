import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lambdafunctionrecommendation as shared_lambdafunctionrecommendation


@dataclass_json
@dataclasses.dataclass
class GetLambdaFunctionRecommendationsResponse:
    lambda_function_recommendations: Optional[list[shared_lambdafunctionrecommendation.LambdaFunctionRecommendation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaFunctionRecommendations') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
