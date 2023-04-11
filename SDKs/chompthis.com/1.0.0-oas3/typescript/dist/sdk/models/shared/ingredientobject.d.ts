import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
 */
export declare class IngredientObjectItemsCalorieConversionFactor extends SpeakeasyBase {
    /**
     * The multiplication factor for carbohydrates
     */
    carbohydrateValue?: number;
    /**
     * The multiplication factor for fat
     */
    fatValue?: number;
    /**
     * The multiplication factor for protein
     */
    proteinValue?: number;
}
/**
 * An object containing information on a specific component of this food item
 */
export declare class IngredientObjectItemsComponents extends SpeakeasyBase {
    /**
     * The number of obersvations on which the measure is based
     */
    dataPoints?: number;
    /**
     * The weight of the component in grams
     */
    gramWeight?: number;
    /**
     * Whether the component is refuse, i.e. not edible
     */
    isRefuse?: boolean;
    /**
     * The kind of component, e.g. bone
     */
    name?: string;
    /**
     * The weight of the component as a percentage of the total weight of the food
     */
    pctWeight?: number;
}
/**
 * An object containing information for a specific nutrient found in this food item
 */
export declare class IngredientObjectItemsNutrients extends SpeakeasyBase {
    /**
     * Number of observations on which the value is based
     */
    dataPoints?: number;
    /**
     * Description of the nutrient source
     */
    description?: string;
    /**
     * Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected.
     */
    footnote?: string;
    /**
     * Maximum nutrient value
     */
    max?: number;
    /**
     * The unit used for the measure of this nutrient
     */
    measurementUnit?: string;
    /**
     * Median nutrient value
     */
    median?: number;
    /**
     * Minimum nutrient value
     */
    min?: number;
    /**
     * Nutrient name
     */
    name?: string;
    /**
     * Amount of the nutrient per 100g of food
     */
    per100g?: number;
    /**
     * Nutrient rank
     */
    rank?: number;
}
/**
 * An object containing information on a specific food portion found in this item
 */
export declare class IngredientObjectItemsPortions extends SpeakeasyBase {
    /**
     * The number of observations on which the measure is based
     */
    dataPoints?: number;
    /**
     * Comments that provide more specificity on the measure. For example, for a pizza measure the dissemination text might be 1 slice is 1/8th of a 14 inch pizza.
     */
    description?: string;
    /**
     * Comments on any unusual aspects of the measure. Examples might includes caveats on the usage of a measure, or reasons why a measure gram weight is an unexpected value.
     */
    footnote?: string;
    /**
     * The weight of the measure in grams
     */
    gramWeight?: number;
    /**
     * The unit used for measure (e.g. if mesure is 3 tsp, the unit is tsp)
     */
    measurementUnit?: string;
    /**
     * Qualifier of the measure (e.g. related to food shape or form) (e.g. melted, crushed, diced)
     */
    modifier?: string;
}
/**
 * An object containing information for this specific item.
 */
export declare class IngredientObjectItems extends SpeakeasyBase {
    /**
     * An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
     */
    calorieConversionFactor?: IngredientObjectItemsCalorieConversionFactor;
    categories?: string[];
    /**
     * Common name associated with this item. These generally clarify what the item is (e.g. when the brand name is "BRAND's Spicy Enchilada" the common name may be "Chicken enchilada")
     */
    commonName?: string;
    /**
     * An array of objects containing the constituent parts of a food (e.g. bone is a component of meat)
     */
    components?: IngredientObjectItemsComponents[];
    /**
     * Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall
     */
    footnote?: string;
    /**
     * Item name as provided by brand owner or as shown on packaging
     */
    name?: string;
    /**
     * An array containing nutrient informatio objects for this food item
     */
    nutrients?: IngredientObjectItemsNutrients[];
    /**
     * An array of objects containing information on discrete amounts of a food found in this item
     */
    portions?: IngredientObjectItemsPortions[];
    /**
     * The multiplication factor used to calculate protein from nitrogen
     */
    proteinConversionFactor?: number;
    /**
     * A value that represents how similar the name of this food item is to the original search term. The lower the value the closer this item's name is to the original search term.
     */
    score?: string;
    /**
     * The original search term that found this food item
     */
    searchTerm?: string;
}
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
 */
export declare class IngredientObject extends SpeakeasyBase {
    /**
     * An array containing an object for each individual item returned by your API call.
     */
    items?: IngredientObjectItems[];
}
