import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TrainingModeEnum } from "./trainingmodeenum";
export declare class CreateSolutionVersionRequest extends SpeakeasyBase {
    name?: string;
    solutionArn: string;
    tags?: Tag[];
    trainingMode?: TrainingModeEnum;
}
