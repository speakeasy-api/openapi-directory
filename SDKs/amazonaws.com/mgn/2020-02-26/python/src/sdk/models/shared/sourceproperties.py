import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import cpu as shared_cpu
from ..shared import disk as shared_disk
from ..shared import identificationhints as shared_identificationhints
from ..shared import networkinterface as shared_networkinterface
from ..shared import os as shared_os


@dataclass_json
@dataclasses.dataclass
class SourceProperties:
    r"""SourceProperties
    Source server properties.
    """
    
    cpus: Optional[list[shared_cpu.CPU]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpus') }})
    disks: Optional[list[shared_disk.Disk]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    identification_hints: Optional[shared_identificationhints.IdentificationHints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identificationHints') }})
    last_updated_date_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedDateTime') }})
    network_interfaces: Optional[list[shared_networkinterface.NetworkInterface]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInterfaces') }})
    os: Optional[shared_os.Os] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    ram_bytes: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramBytes') }})
    recommended_instance_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedInstanceType') }})
    
