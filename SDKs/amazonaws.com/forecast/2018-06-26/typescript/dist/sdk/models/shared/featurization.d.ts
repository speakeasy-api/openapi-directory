import { SpeakeasyBase } from "../../../internal/utils";
import { FeaturizationMethod } from "./featurizationmethod";
/**
 * <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p> </note> <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>
 */
export declare class Featurization extends SpeakeasyBase {
    attributeName: string;
    featurizationPipeline?: FeaturizationMethod[];
}
