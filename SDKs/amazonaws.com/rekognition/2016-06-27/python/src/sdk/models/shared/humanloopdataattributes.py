import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contentclassifier_enum as shared_contentclassifier_enum


@dataclass_json
@dataclasses.dataclass
class HumanLoopDataAttributes:
    r"""HumanLoopDataAttributes
    Allows you to set attributes of the image. Currently, you can declare an image as free of personally identifiable information.
    """
    
    content_classifiers: Optional[list[shared_contentclassifier_enum.ContentClassifierEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentClassifiers') }})
    
