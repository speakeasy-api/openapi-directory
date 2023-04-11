import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When the solution performs AutoML (<code>performAutoML</code> is true in <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>), specifies the recipe that best optimized the specified metric.
 */
export declare class AutoMLResult extends SpeakeasyBase {
    bestRecipeArn?: string;
}
