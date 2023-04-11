import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFoodBrandedSearchPhpSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * #### Filter the search to only include branded foods that are considered compatible with a specific diet.
 *
 * @remarks
 *
 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
 *
 */
export declare enum GetFoodBrandedSearchPhpDietEnum {
    Vegan = "Vegan",
    Vegetarian = "Vegetarian",
    GlutenFree = "Gluten Free"
}
/**
 * #### Set maximum number of records you want the API to return. The default value is "**10**."
 *
 * @remarks
 *
 * **Example**
 * > ```&limit=10```
 *
 */
export declare enum GetFoodBrandedSearchPhpLimitEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6",
    Seven = "7",
    Eight = "8",
    Nine = "9",
    Ten = "10"
}
export declare class GetFoodBrandedSearchPhpRequest extends SpeakeasyBase {
    /**
     * #### Filter the search to only include branded foods that contain a specific allergen.
     *
     * @remarks
     *
     * **Example**
     * > ```&allergen=Peanuts```
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    allergen?: string;
    /**
     * #### Filter the search to only include branded foods that are owned by a specific brand.
     *
     * @remarks
     *
     * **Example**
     * > ```&brand=Starbucks```
     *
     */
    brand?: string;
    /**
     * #### Filter the search to only include branded foods from a specific category.
     *
     * @remarks
     *
     * **Example**
     * > ```&category=Plant Based Foods```
     *
     */
    category?: string;
    /**
     * #### Filter the search to only include branded foods that are sold in a specific country.
     *
     * @remarks
     *
     * **Example**
     * > ```&country=United States```
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    country?: string;
    /**
     * #### Filter the search to only include branded foods that are considered compatible with a specific diet.
     *
     * @remarks
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    diet?: GetFoodBrandedSearchPhpDietEnum;
    /**
     * #### Filter the search to only include branded foods that contain a specific ingredient.
     *
     * @remarks
     *
     * **Example**
     * > ```&ingredient=Salt```
     *
     */
    ingredient?: string;
    /**
     * #### Filter the search to only include branded foods that are associated with a specific keyword.
     *
     * @remarks
     *
     * **Example**
     * > ```&keyword=Organic```
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    keyword?: string;
    /**
     * #### Set maximum number of records you want the API to return. The default value is "**10**."
     *
     * @remarks
     *
     * **Example**
     * > ```&limit=10```
     *
     */
    limit?: GetFoodBrandedSearchPhpLimitEnum;
    /**
     * #### Filter the search to only include branded foods that contain a specific mineral.
     *
     * @remarks
     *
     * **Example**
     * > ```&mineral=Potassium```
     *
     */
    mineral?: string;
    /**
     * #### Filter the search to only include branded foods that contain a specific nutrient.
     *
     * @remarks
     *
     * **Example**
     * > ```&nutrient=Caffeine```
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    nutrient?: string;
    /**
     * #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."
     *
     * @remarks
     *
     * **Example**
     * > ```&page=1```
     *
     */
    page?: number;
    /**
     * #### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.
     *
     * @remarks
     *
     * **Example**
     * > ```&palm_oil=E160a Beta Carotene```
     *
     */
    palmOil?: string;
    /**
     * ### Filter the search to only include branded foods that contain a specific trace ingredient.
     *
     * @remarks
     *
     * **Example**
     * > ```&trace=Tree Nuts```
     *
     * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
     *
     */
    trace?: string;
    /**
     * #### Filter the search to only include branded foods that contain a specific vitamin.
     *
     * @remarks
     *
     * **Example**
     * > ```&vitamin=Biotin```
     *
     */
    vitamin?: string;
}
export declare class GetFoodBrandedSearchPhpResponse extends SpeakeasyBase {
    /**
     * **Valid** - Will return an object containing any matching foods.
     *
     * @remarks
     *
     */
    brandedFoodObject?: shared.BrandedFoodObject;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
