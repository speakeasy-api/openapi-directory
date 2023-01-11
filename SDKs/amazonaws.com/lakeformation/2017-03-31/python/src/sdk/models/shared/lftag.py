import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LfTag:
    r"""LfTag
    A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns not tagged 'PII' of tables tagged 'Prod'.
    """
    
    tag_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKey') }})
    tag_values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagValues') }})
    
