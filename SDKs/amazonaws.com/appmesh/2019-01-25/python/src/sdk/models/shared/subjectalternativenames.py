import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subjectalternativenamematchers as shared_subjectalternativenamematchers


@dataclass_json
@dataclasses.dataclass
class SubjectAlternativeNames:
    r"""SubjectAlternativeNames
    An object that represents the subject alternative names secured by the certificate.
    """
    
    match: shared_subjectalternativenamematchers.SubjectAlternativeNameMatchers = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
