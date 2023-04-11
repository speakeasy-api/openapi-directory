import { SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";
/**
 * Success
 */
export declare class ListModelsOutput extends SpeakeasyBase {
    models: ModelSummary[];
    nextToken?: string;
}
