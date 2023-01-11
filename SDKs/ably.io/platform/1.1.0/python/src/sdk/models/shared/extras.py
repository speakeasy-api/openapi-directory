import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import push as shared_push


@dataclass_json
@dataclasses.dataclass
class Extras:
    r"""Extras
    Extras object. Currently only allows for [push](https://www.ably.io/documentation/general/push/publish#channel-broadcast-example) extra.
    """
    
    push: Optional[shared_push.Push] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('push') }, 'form': { 'field_name': 'push' }})
    
