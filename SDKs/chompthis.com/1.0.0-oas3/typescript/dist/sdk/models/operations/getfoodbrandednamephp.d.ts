import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFoodBrandedNamePhpSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
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
export declare enum GetFoodBrandedNamePhpLimitEnum {
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
export declare class GetFoodBrandedNamePhpRequest extends SpeakeasyBase {
    /**
     * #### Set maximum number of records you want the API to return. The default value is "**10**."
     *
     * @remarks
     *
     * **Example**
     * > ```&limit=10```
     *
     */
    limit?: GetFoodBrandedNamePhpLimitEnum;
    /**
     * #### Search for branded food items using a general food name keyword. This does not have to exactly match the "official" name for the food.
     *
     * @remarks
     *
     * **Example**
     * > ```&name=Starburst```
     *
     */
    name: string;
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
}
export declare class GetFoodBrandedNamePhpResponse extends SpeakeasyBase {
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
