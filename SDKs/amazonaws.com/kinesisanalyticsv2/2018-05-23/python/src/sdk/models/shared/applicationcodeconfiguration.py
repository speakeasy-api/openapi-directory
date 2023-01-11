import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codecontent as shared_codecontent
from ..shared import codecontenttype_enum as shared_codecontenttype_enum


@dataclass_json
@dataclasses.dataclass
class ApplicationCodeConfiguration:
    r"""ApplicationCodeConfiguration
    Describes code configuration for an application.
    """
    
    code_content_type: shared_codecontenttype_enum.CodeContentTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContentType') }})
    code_content: Optional[shared_codecontent.CodeContent] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CodeContent') }})
    
