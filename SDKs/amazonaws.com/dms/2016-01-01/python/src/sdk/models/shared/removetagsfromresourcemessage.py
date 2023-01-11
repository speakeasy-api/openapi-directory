import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RemoveTagsFromResourceMessage:
    r"""RemoveTagsFromResourceMessage
    Removes one or more tags from an DMS resource.
    """
    
    resource_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    tag_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TagKeys') }})
    
