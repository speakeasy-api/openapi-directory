import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object containing additional information on the countries where this item is found
 */
export declare class BrandedFoodObjectItemsCountryDetails extends SpeakeasyBase {
    /**
     * The number of countries where English is the country's primary language
     */
    englishSpeaking?: number;
    /**
     * The number of countries where English is not the country's primary language
     */
    nonEnglishSpeaking?: number;
}
/**
 * An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
 */
export declare class BrandedFoodObjectItemsDietFlags extends SpeakeasyBase {
    /**
     * A description of how we graded this ingredient for compatibility with the diet
     */
    compatibilityDescription?: string;
    /**
     * A numeric representation of if we believe this ingredient is compatible with the diet. Higher values indicate more compatibility
     */
    compatibilityLevel?: number;
    /**
     * Name of the diet with which this ingredient may not be compatible
     */
    dietLabel?: string;
    /**
     * Ingredient name
     */
    ingredient?: string;
    /**
     * Description of the ingredient
     */
    ingredientDescription?: string;
    /**
     * Boolean representing if the ingredient is a known allergen
     */
    isAllergen?: boolean;
    /**
     * A description of if we believe this ingredient is compatible with the diet
     */
    isCompatible?: string;
}
/**
 * An object containing information on this item's compatibility with Gluten Free diets
 */
export declare class BrandedFoodObjectItemsDietLabelsGlutenFree extends SpeakeasyBase {
    /**
     * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
     */
    compatibilityLevel?: number;
    /**
     * Boolean that indicates if we are confident in how this item is graded for this diet
     */
    confidence?: number;
    /**
     * Description of our confidence that this item was graded correctly
     */
    confidenceDescription?: string;
    /**
     * Boolean describing if this item is compatible with this diet
     */
    isCompatible?: boolean;
    /**
     * Diet name
     */
    name?: string;
}
/**
 * An object containing information on this item's compatibility with the Vegan diets
 */
export declare class BrandedFoodObjectItemsDietLabelsVegan extends SpeakeasyBase {
    /**
     * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
     */
    compatibilityLevel?: number;
    /**
     * Boolean that indicates if we are confident in how this item is graded for this diet
     */
    confidence?: number;
    /**
     * Description of our confidence that this item was graded correctly
     */
    confidenceDescription?: string;
    /**
     * Boolean describing if this item is compatible with this diet
     */
    isCompatible?: boolean;
    /**
     * Diet name
     */
    name?: string;
}
/**
 * An object containing information on this item's compatibility with Vegetarian diets
 */
export declare class BrandedFoodObjectItemsDietLabelsVegetarian extends SpeakeasyBase {
    /**
     * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
     */
    compatibilityLevel?: number;
    /**
     * Boolean that indicates if we are confident in how this item is graded for this diet
     */
    confidence?: number;
    /**
     * Description of our confidence that this item was graded correctly
     */
    confidenceDescription?: string;
    /**
     * Boolean describing if this item is compatible with this diet
     */
    isCompatible?: boolean;
    /**
     * Diet name
     */
    name?: string;
}
/**
 * An object containing this item's compatibility grades for each supported diet
 */
export declare class BrandedFoodObjectItemsDietLabels extends SpeakeasyBase {
    /**
     * An object containing information on this item's compatibility with Gluten Free diets
     */
    glutenFree?: BrandedFoodObjectItemsDietLabelsGlutenFree;
    /**
     * An object containing information on this item's compatibility with the Vegan diets
     */
    vegan?: BrandedFoodObjectItemsDietLabelsVegan;
    /**
     * An object containing information on this item's compatibility with Vegetarian diets
     */
    vegetarian?: BrandedFoodObjectItemsDietLabelsVegetarian;
}
/**
 * An object containing information for a specific nutrient found in this food item
 */
export declare class BrandedFoodObjectItemsNutrients extends SpeakeasyBase {
    /**
     * Number of observations on which the value is based
     */
    dataPoints?: number;
    /**
     * Description of the nutrient source
     */
    description?: string;
    /**
     * The unit used for the measure of this nutrient
     */
    measurementUnit?: string;
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
 * An object containing basic packaging information about this item
 */
export declare class BrandedFoodObjectItemsPackage extends SpeakeasyBase {
    /**
     * Package quantity
     */
    quantity?: number;
    /**
     * Package size
     */
    size?: string;
}
/**
 * An object containing photos of the front of this item's packaging
 */
export declare class BrandedFoodObjectItemsPackagingPhotosFront extends SpeakeasyBase {
    /**
     * Full-sized photo of the front of this item's packaging
     */
    display?: string;
    /**
     * Small photo of the front of this item's packaging
     */
    small?: string;
    /**
     * Thumbnail photo of the front of this item's packaging
     */
    thumb?: string;
}
/**
 * An object containing photos of the ingredients on this item's packaging
 */
export declare class BrandedFoodObjectItemsPackagingPhotosIngredients extends SpeakeasyBase {
    /**
     * Full-sized photo of the ingredients on this item's packaging
     */
    display?: string;
    /**
     * Small photo of the ingredients on this item's packaging
     */
    small?: string;
    /**
     * Thumbnail photo of the ingredients on this item's packaging
     */
    thumb?: string;
}
/**
 * An object containing photos of this item's nutrition label
 */
export declare class BrandedFoodObjectItemsPackagingPhotosNutrition extends SpeakeasyBase {
    /**
     * Full-sized photo of this item's nutrition label
     */
    display?: string;
    /**
     * Small photo of this item's nutrition label
     */
    small?: string;
    /**
     * Thumbnail photo of this item's nutrition label
     */
    thumb?: string;
}
/**
 * A object containing a collection of photos of this item's packaging
 */
export declare class BrandedFoodObjectItemsPackagingPhotos extends SpeakeasyBase {
    /**
     * An object containing photos of the front of this item's packaging
     */
    front?: BrandedFoodObjectItemsPackagingPhotosFront;
    /**
     * An object containing photos of the ingredients on this item's packaging
     */
    ingredients?: BrandedFoodObjectItemsPackagingPhotosIngredients;
    /**
     * An object containing photos of this item's nutrition label
     */
    nutrition?: BrandedFoodObjectItemsPackagingPhotosNutrition;
}
/**
 * An object containing serving information for this item
 */
export declare class BrandedFoodObjectItemsServing extends SpeakeasyBase {
    /**
     * Measurement unit for each serving (e.g. if measure is 3 tsp, the unit is tsp)
     */
    measurementUnit?: string;
    /**
     * Serving size
     */
    size?: string;
    /**
     * Serving size description
     */
    sizeFulltext?: string;
}
/**
 * An object containing information for this specific item.
 */
export declare class BrandedFoodObjectItems extends SpeakeasyBase {
    /**
     * An array of ingredients in this item that may cause allergic reactions in people
     */
    allergens?: string[];
    /**
     * EAN/UPC barcode
     */
    barcode?: string;
    /**
     * The brand name that owns this item
     */
    brand?: string;
    /**
     * An array of brands we have associated with this item. Some items are sold by more than 1 brand.
     */
    brandList?: string[];
    categories?: string[];
    /**
     * An array of countries where this item is sold
     */
    countries?: string[];
    /**
     * An object containing additional information on the countries where this item is found
     */
    countryDetails?: BrandedFoodObjectItemsCountryDetails;
    /**
     * A description of this item
     */
    description?: string;
    /**
     * An array of ingredient objects that were flagged while grading this item for compatibility with each diet
     */
    dietFlags?: BrandedFoodObjectItemsDietFlags[];
    /**
     * An object containing this item's compatibility grades for each supported diet
     */
    dietLabels?: BrandedFoodObjectItemsDietLabels;
    /**
     * A boolean indicating if we have English ingredients for this item
     */
    hasEnglishIngredients?: boolean;
    /**
     * An array of this item's ingredients
     */
    ingredientList?: string[];
    /**
     * This food item's ingredients from greatest quantity to least
     */
    ingredients?: string;
    /**
     * An array of keywords that can be used to describe this item
     */
    keywords?: string[];
    /**
     * An array of minerals that this item contains
     */
    minerals?: string[];
    /**
     * Item name as provided by brand owner or as shown on packaging
     */
    name?: string;
    /**
     * An array containing nutrient informatio objects for this food item
     */
    nutrients?: BrandedFoodObjectItemsNutrients[];
    /**
     * An object containing basic packaging information about this item
     */
    package?: BrandedFoodObjectItemsPackage;
    /**
     * A object containing a collection of photos of this item's packaging
     */
    packagingPhotos?: BrandedFoodObjectItemsPackagingPhotos;
    /**
     * An array of ingredients made from palm oil
     */
    palmOilIngredients?: string[];
    /**
     * An object containing serving information for this item
     */
    serving?: BrandedFoodObjectItemsServing;
    /**
     * An array of trace ingredients that may be found in this item
     */
    traces?: string[];
    /**
     * An array of vitamins that are found in this item
     */
    vitamins?: string[];
}
/**
 * Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
 */
export declare class BrandedFoodObject extends SpeakeasyBase {
    /**
     * An array containing an object for each individual item returned by your API call.
     */
    items?: BrandedFoodObjectItems[];
}
