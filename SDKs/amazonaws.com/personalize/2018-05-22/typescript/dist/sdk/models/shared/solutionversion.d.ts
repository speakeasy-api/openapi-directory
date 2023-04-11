import { SpeakeasyBase } from "../../../internal/utils";
import { SolutionConfig } from "./solutionconfig";
import { TrainingModeEnum } from "./trainingmodeenum";
import { TunedHPOParams } from "./tunedhpoparams";
/**
 * An object that provides information about a specific version of a <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_Solution.html">Solution</a> in a Custom dataset group.
 */
export declare class SolutionVersion extends SpeakeasyBase {
    creationDateTime?: Date;
    datasetGroupArn?: string;
    eventType?: string;
    failureReason?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    performAutoML?: boolean;
    performHPO?: boolean;
    recipeArn?: string;
    solutionArn?: string;
    solutionConfig?: SolutionConfig;
    solutionVersionArn?: string;
    status?: string;
    trainingHours?: number;
    trainingMode?: TrainingModeEnum;
    tunedHPOParams?: TunedHPOParams;
}
