import { SpeakeasyBase } from "../../../internal/utils";
import { RecipeOutputFormatEnum } from "./recipeoutputformatenum";
/**
 * Success
 */
export declare class GetComponentResponse extends SpeakeasyBase {
    recipe: string;
    recipeOutputFormat: RecipeOutputFormatEnum;
    tags?: Record<string, string>;
}
