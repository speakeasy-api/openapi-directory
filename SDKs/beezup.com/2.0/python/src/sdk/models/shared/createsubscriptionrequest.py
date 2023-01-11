import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateSubscriptionRequest:
    merchant_application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantApplicationName') }})
    merchant_application_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantApplicationVersion') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    target_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    merchant_email_alert: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantEmailAlert') }})
    
