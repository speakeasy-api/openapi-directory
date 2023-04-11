import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobCompletionCriteria } from "./automljobcompletioncriteria";
/**
 * Stores the configuration information for the image classification problem of an AutoML job using the V2 API.
 */
export declare class ImageClassificationJobConfig extends SpeakeasyBase {
    completionCriteria?: AutoMLJobCompletionCriteria;
}
