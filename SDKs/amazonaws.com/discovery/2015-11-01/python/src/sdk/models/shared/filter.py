import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Filter:
    r"""Filter
    <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href=\"https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html\">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
    """
    
    condition: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
