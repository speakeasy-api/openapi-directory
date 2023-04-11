import { SpeakeasyBase } from "../../../internal/utils";
import { AssetModelStatus } from "./assetmodelstatus";
/**
 * Success
 */
export declare class CreateAssetModelResponse extends SpeakeasyBase {
    assetModelArn: string;
    assetModelId: string;
    assetModelStatus: AssetModelStatus;
}
