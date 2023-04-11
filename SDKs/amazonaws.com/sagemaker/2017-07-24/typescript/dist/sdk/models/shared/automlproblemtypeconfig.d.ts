import { SpeakeasyBase } from "../../../internal/utils";
import { ImageClassificationJobConfig } from "./imageclassificationjobconfig";
import { TextClassificationJobConfig } from "./textclassificationjobconfig";
/**
 * A collection of settings specific to the problem type used to configure an AutoML job using the V2 API. There must be one and only one config of the following type.
 */
export declare class AutoMLProblemTypeConfig extends SpeakeasyBase {
    imageClassificationJobConfig?: ImageClassificationJobConfig;
    textClassificationJobConfig?: TextClassificationJobConfig;
}
