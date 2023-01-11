import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Tag:
    r"""Tag
    A key:value pair that adds metadata to a resource used by Amazon Transcribe. For example, a tag with the key:value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by your organization's sales department.
    """
    
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
