import { SpeakeasyBase } from "../../../internal/utils";
import { SupplementaryFeature } from "./supplementaryfeature";
/**
 * <note> <p>This object belongs to the <a>CreatePredictor</a> operation. If you created your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p> </note> <p>The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.</p>
 */
export declare class InputDataConfig extends SpeakeasyBase {
    datasetGroupArn: string;
    supplementaryFeatures?: SupplementaryFeature[];
}
