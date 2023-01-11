import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import privatednsnamespacechange as shared_privatednsnamespacechange


@dataclass_json
@dataclasses.dataclass
class UpdatePrivateDNSNamespaceRequest:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    namespace: shared_privatednsnamespacechange.PrivateDNSNamespaceChange = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Namespace') }})
    updater_request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdaterRequestId') }})
    
