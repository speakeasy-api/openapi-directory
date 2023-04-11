import { SpeakeasyBase } from "../../../internal/utils";
import { AssetLocation } from "./assetlocation";
import { AssetTypeEnum } from "./assettypeenum";
import { ComputeAttributes } from "./computeattributes";
/**
 *  Information about hardware assets.
 */
export declare class AssetInfo extends SpeakeasyBase {
    assetId?: string;
    assetLocation?: AssetLocation;
    assetType?: AssetTypeEnum;
    computeAttributes?: ComputeAttributes;
    rackId?: string;
}
