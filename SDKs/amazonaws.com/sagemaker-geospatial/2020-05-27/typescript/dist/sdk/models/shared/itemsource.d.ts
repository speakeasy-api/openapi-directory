import { SpeakeasyBase } from "../../../internal/utils";
import { AssetValue } from "./assetvalue";
import { Geometry } from "./geometry";
import { Properties } from "./properties";
/**
 * Structure representing the items in the response for SearchRasterDataCollection.
 */
export declare class ItemSource extends SpeakeasyBase {
    assets?: Record<string, AssetValue>;
    dateTime: Date;
    geometry: Geometry;
    id: string;
    properties?: Properties;
}
