import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schema1 as shared_schema1


@dataclasses.dataclass
class PatchChargeStationPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PatchChargeStation200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class PatchChargeStationRequest:
    path_params: PatchChargeStationPathParams = dataclasses.field()
    request: shared_schema1.Schema1 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchChargeStationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patch_charge_station_200_application_json_object: Optional[PatchChargeStation200ApplicationJSON] = dataclasses.field(default=None)
    
