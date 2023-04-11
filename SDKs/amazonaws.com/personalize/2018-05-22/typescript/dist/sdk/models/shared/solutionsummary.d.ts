import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of a solution. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a> API.
 */
export declare class SolutionSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    lastUpdatedDateTime?: Date;
    name?: string;
    recipeArn?: string;
    solutionArn?: string;
    status?: string;
}
