import { SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";
/**
 * Success
 */
export declare class ListModelsResponse extends SpeakeasyBase {
    modelSummaries?: ModelSummary[];
    nextToken?: string;
}
