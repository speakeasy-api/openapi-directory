import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationfiltername_enum as shared_locationfiltername_enum
from ..shared import operator_enum as shared_operator_enum


@dataclass_json
@dataclasses.dataclass
class LocationFilter:
    r"""LocationFilter
    You can use API filters to narrow down the list of resources returned by <code>ListLocations</code>. For example, to retrieve all your Amazon S3 locations, you can use <code>ListLocations</code> with filter name <code>LocationType S3</code> and <code>Operator Equals</code>.
    """
    
    name: shared_locationfiltername_enum.LocationFilterNameEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operator: shared_operator_enum.OperatorEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
