import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import testgridsessionartifacttype_enum as shared_testgridsessionartifacttype_enum


@dataclass_json
@dataclasses.dataclass
class TestGridSessionArtifact:
    r"""TestGridSessionArtifact
    <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>
    """
    
    filename: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    type: Optional[shared_testgridsessionartifacttype_enum.TestGridSessionArtifactTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
