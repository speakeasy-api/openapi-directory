import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobCompletionCriteria } from "./automljobcompletioncriteria";
/**
 * Stores the configuration information for the text classification problem of an AutoML job using the V2 API.
 */
export declare class TextClassificationJobConfig extends SpeakeasyBase {
    completionCriteria?: AutoMLJobCompletionCriteria;
    contentColumn?: string;
    targetLabelColumn?: string;
}
