import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContentSymlinkLinks:
    git: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ContentSymlink:
    r"""ContentSymlink
    An object describing a symlink
    """
    
    links: ContentSymlinkLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    download_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    target: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
