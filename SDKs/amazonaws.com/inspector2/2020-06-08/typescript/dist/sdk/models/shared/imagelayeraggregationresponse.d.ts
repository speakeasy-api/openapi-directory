import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of a finding aggregation by image layer.
 */
export declare class ImageLayerAggregationResponse extends SpeakeasyBase {
    accountId: string;
    layerHash: string;
    repository: string;
    resourceId: string;
    severityCounts?: SeverityCounts;
}
