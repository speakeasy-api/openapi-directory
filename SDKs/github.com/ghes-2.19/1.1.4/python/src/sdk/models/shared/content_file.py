import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ContentFileLinks:
    git: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    html: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    self: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ContentFile:
    r"""ContentFile
    Content File
    """
    
    links: ContentFileLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    content: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    download_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_url') }})
    encoding: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('encoding') }})
    git_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('git_url') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    path: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    submodule_git_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('submodule_git_url') }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
