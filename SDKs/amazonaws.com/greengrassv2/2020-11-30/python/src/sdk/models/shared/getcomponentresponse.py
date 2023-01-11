import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recipeoutputformat_enum as shared_recipeoutputformat_enum


@dataclass_json
@dataclasses.dataclass
class GetComponentResponse:
    recipe: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipe') }})
    recipe_output_format: shared_recipeoutputformat_enum.RecipeOutputFormatEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeOutputFormat') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
