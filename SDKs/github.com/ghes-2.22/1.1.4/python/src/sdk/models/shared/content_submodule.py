import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContentSubmoduleLinks:
    git: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ContentSubmodule:
    r"""ContentSubmodule
    An object describing a symlink
    """
    
    links: ContentSubmoduleLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    download_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    submodule_git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('submodule_git_url') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
