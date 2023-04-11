import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
import { RecipeProviderEnum } from "./recipeproviderenum";
export declare class ListRecipesRequest extends SpeakeasyBase {
    domain?: DomainEnum;
    maxResults?: number;
    nextToken?: string;
    recipeProvider?: RecipeProviderEnum;
}
