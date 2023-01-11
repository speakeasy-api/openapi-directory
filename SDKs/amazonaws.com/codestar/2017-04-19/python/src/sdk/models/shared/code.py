import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import codedestination as shared_codedestination
from ..shared import codesource as shared_codesource


@dataclass_json
@dataclasses.dataclass
class Code:
    r"""Code
    Location and destination information about the source code files provided with the project request. The source code is uploaded to the new project source repository after project creation.
    """
    
    destination: shared_codedestination.CodeDestination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    source: shared_codesource.CodeSource = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
