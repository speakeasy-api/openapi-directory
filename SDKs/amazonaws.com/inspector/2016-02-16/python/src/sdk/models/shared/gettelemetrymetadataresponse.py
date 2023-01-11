import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import telemetrymetadata as shared_telemetrymetadata


@dataclass_json
@dataclasses.dataclass
class GetTelemetryMetadataResponse:
    telemetry_metadata: list[shared_telemetrymetadata.TelemetryMetadata] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryMetadata') }})
    
