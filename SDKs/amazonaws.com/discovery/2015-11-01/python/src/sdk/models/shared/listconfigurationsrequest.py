import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import configurationitemtype_enum as shared_configurationitemtype_enum
from ..shared import filter as shared_filter
from ..shared import orderbyelement as shared_orderbyelement


@dataclass_json
@dataclasses.dataclass
class ListConfigurationsRequest:
    configuration_type: shared_configurationitemtype_enum.ConfigurationItemTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationType') }})
    filters: Optional[list[shared_filter.Filter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    order_by: Optional[list[shared_orderbyelement.OrderByElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    
