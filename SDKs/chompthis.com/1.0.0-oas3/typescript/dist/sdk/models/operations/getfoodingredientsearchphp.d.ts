import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFoodIngredientSearchPhpSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * #### Set maximum number of records you want the API to return, per search term. The default value is "**1**."
 *
 * @remarks
 *
 * **Example**
 * > ```&limit=3```
 *
 */
export declare enum GetFoodIngredientSearchPhpLimitEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class GetFoodIngredientSearchPhpRequest extends SpeakeasyBase {
    /**
     * Search our database for a single ingredient or a specific set of ingredients.
     *
     * @remarks
     *
     * **Example #1: Single Ingredient**
     * > ```&find=raw broccoli```
     *
     * **Example #2: Set of Ingredients**
     * > ```&find=raw broccoli,buttermilk waffle,mashed potatoes```
     *
     * **Important Notes**
     *   * Comma-separated lists cannot contain more than **10 ingredients**. You must perform additional API calls if you are looking up more than 10 ingredients.
     *
     */
    find: string;
    /**
     * #### Set maximum number of records you want the API to return, per search term. The default value is "**1**."
     *
     * @remarks
     *
     * **Example**
     * > ```&limit=3```
     *
     */
    limit?: GetFoodIngredientSearchPhpLimitEnum;
}
export declare class GetFoodIngredientSearchPhpResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * **Valid** - Will return an object containing any matching ingredient foods.
     *
     * @remarks
     *
     */
    ingredientObject?: shared.IngredientObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
