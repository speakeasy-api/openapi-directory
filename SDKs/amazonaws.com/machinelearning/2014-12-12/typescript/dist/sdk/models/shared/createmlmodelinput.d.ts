import { SpeakeasyBase } from "../../../internal/utils";
import { MLModelTypeEnum } from "./mlmodeltypeenum";
export declare class CreateMLModelInput extends SpeakeasyBase {
    mlModelId: string;
    mlModelName?: string;
    mlModelType: MLModelTypeEnum;
    parameters?: Record<string, string>;
    recipe?: string;
    recipeUri?: string;
    trainingDataSourceId: string;
}
