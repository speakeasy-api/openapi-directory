import { SpeakeasyBase } from "../../../internal/utils";
import { DomainEnum } from "./domainenum";
/**
 * Provides a summary of the properties of a recipe. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecipe.html">DescribeRecipe</a> API.
 */
export declare class RecipeSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    domain?: DomainEnum;
    lastUpdatedDateTime?: Date;
    name?: string;
    recipeArn?: string;
    status?: string;
}
