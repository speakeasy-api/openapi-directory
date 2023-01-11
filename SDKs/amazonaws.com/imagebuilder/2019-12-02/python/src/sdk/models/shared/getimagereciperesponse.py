import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagerecipe as shared_imagerecipe


@dataclass_json
@dataclasses.dataclass
class GetImageRecipeResponse:
    image_recipe: Optional[shared_imagerecipe.ImageRecipe] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageRecipe') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
