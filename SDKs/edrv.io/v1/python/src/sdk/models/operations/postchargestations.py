import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schema1 as shared_schema1


@dataclass_json
@dataclasses.dataclass
class PostChargeStations201ApplicationJSON:
    chargestation: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargestation') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    

@dataclasses.dataclass
class PostChargeStationsRequest:
    request: shared_schema1.Schema1 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostChargeStationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_charge_stations_201_application_json_object: Optional[PostChargeStations201ApplicationJSON] = dataclasses.field(default=None)
    
