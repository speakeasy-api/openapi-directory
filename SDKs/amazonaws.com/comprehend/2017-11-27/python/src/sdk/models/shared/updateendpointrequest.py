import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UpdateEndpointRequest:
    desired_inference_units: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredInferenceUnits') }})
    endpoint_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointArn') }})
    
