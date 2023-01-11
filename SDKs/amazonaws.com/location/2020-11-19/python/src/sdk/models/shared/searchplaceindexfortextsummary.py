import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SearchPlaceIndexForTextSummary:
    r"""SearchPlaceIndexForTextSummary
    A summary of the geocoding request sent using <code>SearchPlaceIndexForText</code>.
    """
    
    data_source: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSource') }})
    text: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    bias_position: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BiasPosition') }})
    filter_b_box: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterBBox') }})
    filter_countries: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterCountries') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    result_b_box: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResultBBox') }})
    
