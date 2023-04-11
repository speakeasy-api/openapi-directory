import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLResult } from "./automlresult";
import { SolutionConfig } from "./solutionconfig";
import { SolutionVersionSummary } from "./solutionversionsummary";
/**
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
 */
export declare class Solution extends SpeakeasyBase {
    autoMLResult?: AutoMLResult;
    creationDateTime?: Date;
    datasetGroupArn?: string;
    eventType?: string;
    lastUpdatedDateTime?: Date;
    latestSolutionVersion?: SolutionVersionSummary;
    name?: string;
    performAutoML?: boolean;
    performHPO?: boolean;
    recipeArn?: string;
    solutionArn?: string;
    solutionConfig?: SolutionConfig;
    status?: string;
}
