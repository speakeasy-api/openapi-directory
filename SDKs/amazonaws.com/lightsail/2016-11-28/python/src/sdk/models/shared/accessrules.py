import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesstype_enum as shared_accesstype_enum


@dataclass_json
@dataclasses.dataclass
class AccessRules:
    r"""AccessRules
    <p>Describes the anonymous access permissions for an Amazon Lightsail bucket and its objects.</p> <p>For more information about bucket access permissions, see <a href=\"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-understanding-bucket-permissions\">Understanding bucket permissions in Amazon Lightsail</a> in the </p> <p> <i>Amazon Lightsail Developer Guide</i>.</p>
    """
    
    allow_public_overrides: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPublicOverrides') }})
    get_object: Optional[shared_accesstype_enum.AccessTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('getObject') }})
    
