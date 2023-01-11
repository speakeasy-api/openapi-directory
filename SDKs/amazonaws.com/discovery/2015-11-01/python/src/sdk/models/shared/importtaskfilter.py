import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import importtaskfiltername_enum as shared_importtaskfiltername_enum


@dataclass_json
@dataclasses.dataclass
class ImportTaskFilter:
    r"""ImportTaskFilter
    <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
    """
    
    name: Optional[shared_importtaskfiltername_enum.ImportTaskFilterNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
