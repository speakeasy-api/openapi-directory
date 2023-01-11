import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PullRequestMinimalBaseRepo:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestMinimalBase:
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestMinimalBaseRepo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestMinimalHeadRepo:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestMinimalHead:
    ref: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ref') }})
    repo: PullRequestMinimalHeadRepo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repo') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    

@dataclass_json
@dataclasses.dataclass
class PullRequestMinimal:
    base: PullRequestMinimalBase = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    head: PullRequestMinimalHead = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('head') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
