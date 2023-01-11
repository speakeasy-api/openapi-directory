import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class DomainRankPathParams:
    domain: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class DomainRank200ApplicationJSON:
    rank: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    

@dataclasses.dataclass
class DomainRankRequest:
    path_params: DomainRankPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DomainRankResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    domain_rank_200_application_json_object: Optional[DomainRank200ApplicationJSON] = dataclasses.field(default=None)
    
