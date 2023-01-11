import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schemaattributetype as shared_schemaattributetype


@dataclass_json
@dataclasses.dataclass
class AddCustomAttributesRequest:
    r"""AddCustomAttributesRequest
    Represents the request to add custom attributes.
    """
    
    custom_attributes: list[shared_schemaattributetype.SchemaAttributeType] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomAttributes') }})
    user_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPoolId') }})
    
