import { SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStateEnum } from "./assetmodelstateenum";
import { ErrorDetails } from "./errordetails";
/**
 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
 */
export declare class AssetModelStatus extends SpeakeasyBase {
    error?: ErrorDetails;
    state: AssetModelStateEnum;
}
