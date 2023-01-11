import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IssueEventProjectCard:
    r"""IssueEventProjectCard
    Issue Event Project Card
    """
    
    column_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    project_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_id') }})
    project_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('project_url') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    previous_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_column_name') }})
    
