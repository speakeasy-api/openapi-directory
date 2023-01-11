import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import encryptionconfiguration as shared_encryptionconfiguration


@dataclass_json
@dataclasses.dataclass
class ResultConfigurationUpdates:
    r"""ResultConfigurationUpdates
    The information about the updates in the query results, such as output location and encryption configuration for the query results.
    """
    
    encryption_configuration: Optional[shared_encryptionconfiguration.EncryptionConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EncryptionConfiguration') }})
    output_location: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputLocation') }})
    remove_encryption_configuration: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveEncryptionConfiguration') }})
    remove_output_location: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveOutputLocation') }})
    
