import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DemodulationConfig:
    r"""DemodulationConfig
    Information about the demodulation <code>Config</code>.
    """
    
    unvalidated_json: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unvalidatedJSON') }})
    
