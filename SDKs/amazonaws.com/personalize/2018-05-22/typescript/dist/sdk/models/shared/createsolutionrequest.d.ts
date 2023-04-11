import { SpeakeasyBase } from "../../../internal/utils";
import { SolutionConfig } from "./solutionconfig";
import { Tag } from "./tag";
export declare class CreateSolutionRequest extends SpeakeasyBase {
    datasetGroupArn: string;
    eventType?: string;
    name: string;
    performAutoML?: boolean;
    performHPO?: boolean;
    recipeArn?: string;
    solutionConfig?: SolutionConfig;
    tags?: Tag[];
}
