import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codeconfiguration as shared_codeconfiguration
from ..shared import sourcecodeversion as shared_sourcecodeversion


@dataclass_json
@dataclasses.dataclass
class CodeRepository:
    r"""CodeRepository
    Describes a source code repository.
    """
    
    repository_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepositoryUrl') }})
    source_code_version: shared_sourcecodeversion.SourceCodeVersion = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceCodeVersion') }})
    code_configuration: Optional[shared_codeconfiguration.CodeConfiguration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeConfiguration') }})
    
