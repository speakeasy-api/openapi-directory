import { SpeakeasyBase } from "../../../internal/utils";
import { AssetStatus } from "./assetstatus";
/**
 * Success
 */
export declare class CreateAssetResponse extends SpeakeasyBase {
    assetArn: string;
    assetId: string;
    assetStatus: AssetStatus;
}
