import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import repository_subscription as shared_repository_subscription


@dataclasses.dataclass
class ActivitySetRepoSubscriptionPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ActivitySetRepoSubscriptionRequestBody:
    ignored: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    subscribed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribed') }})
    

@dataclasses.dataclass
class ActivitySetRepoSubscriptionRequest:
    path_params: ActivitySetRepoSubscriptionPathParams = dataclasses.field()
    request: Optional[ActivitySetRepoSubscriptionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ActivitySetRepoSubscriptionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_subscription: Optional[shared_repository_subscription.RepositorySubscription] = dataclasses.field(default=None)
    
