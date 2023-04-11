import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains the results of a finding aggregation by image layer.
 */
export declare class PackageAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    packageName: string;
    severityCounts?: SeverityCounts;
}
