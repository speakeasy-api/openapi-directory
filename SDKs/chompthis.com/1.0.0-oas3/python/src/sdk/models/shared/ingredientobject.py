import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IngredientObjectItemsCalorieConversionFactor:
    r"""IngredientObjectItemsCalorieConversionFactor
    An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
    """
    
    carbohydrate_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carbohydrate_value') }})
    fat_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fat_value') }})
    protein_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein_value') }})
    

@dataclass_json
@dataclasses.dataclass
class IngredientObjectItemsComponents:
    r"""IngredientObjectItemsComponents
    An object containing information on a specific component of this food item
    """
    
    data_points: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    gram_weight: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gram_weight') }})
    is_refuse: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_refuse') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pct_weight: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pct_weight') }})
    

@dataclass_json
@dataclasses.dataclass
class IngredientObjectItemsNutrients:
    r"""IngredientObjectItemsNutrients
    An object containing information for a specific nutrient found in this food item
    """
    
    data_points: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    footnote: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    max: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    measurement_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    median: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('median') }})
    min: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    per_100g: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_100g') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    

@dataclass_json
@dataclasses.dataclass
class IngredientObjectItemsPortions:
    r"""IngredientObjectItemsPortions
    An object containing information on a specific food portion found in this item
    """
    
    data_points: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_points') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    footnote: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    gram_weight: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gram_weight') }})
    measurement_unit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurement_unit') }})
    modifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifier') }})
    

@dataclass_json
@dataclasses.dataclass
class IngredientObjectItems:
    r"""IngredientObjectItems
    An object containing information for this specific item.
    """
    
    calorie_conversion_factor: Optional[IngredientObjectItemsCalorieConversionFactor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calorie_conversion_factor') }})
    categories: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    common_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('common_name') }})
    components: Optional[list[IngredientObjectItemsComponents]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    footnote: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('footnote') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nutrients: Optional[list[IngredientObjectItemsNutrients]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nutrients') }})
    portions: Optional[list[IngredientObjectItemsPortions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portions') }})
    protein_conversion_factor: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protein_conversion_factor') }})
    score: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    search_term: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_term') }})
    

@dataclass_json
@dataclasses.dataclass
class IngredientObject:
    r"""IngredientObject
    Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
    """
    
    items: Optional[list[IngredientObjectItems]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    
