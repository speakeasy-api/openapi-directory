import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubjectAlternativeNameMatchers:
    r"""SubjectAlternativeNameMatchers
    An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
    """
    
    exact: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exact') }})
    
