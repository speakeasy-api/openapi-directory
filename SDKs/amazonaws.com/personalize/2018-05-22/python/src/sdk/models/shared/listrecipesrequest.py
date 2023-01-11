import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import recipeprovider_enum as shared_recipeprovider_enum


@dataclass_json
@dataclasses.dataclass
class ListRecipesRequest:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    recipe_provider: Optional[shared_recipeprovider_enum.RecipeProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipeProvider') }})
    
