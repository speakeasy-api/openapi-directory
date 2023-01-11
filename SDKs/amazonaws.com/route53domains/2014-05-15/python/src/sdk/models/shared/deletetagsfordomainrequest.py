import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteTagsForDomainRequest:
    r"""DeleteTagsForDomainRequest
    The DeleteTagsForDomainRequest includes the following elements.
    """
    
    domain_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainName') }})
    tags_to_delete: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagsToDelete') }})
    
