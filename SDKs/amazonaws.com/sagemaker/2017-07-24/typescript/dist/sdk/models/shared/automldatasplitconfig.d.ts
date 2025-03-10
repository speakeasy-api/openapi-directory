import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>This structure specifies how to split the data into train and validation datasets.</p> <p>If you are using the V1 API (for example <code>CreateAutoMLJob</code>) or the V2 API for Natural Language Processing problems (for example <code>CreateAutoMLJobV2</code> with a <code>TextClassificationJobConfig</code> problem type), the validation and training datasets must contain the same headers. Also, for V1 API jobs, the validation dataset must be less than 2 GB in size.</p>
 */
export declare class AutoMLDataSplitConfig extends SpeakeasyBase {
    validationFraction?: number;
}
