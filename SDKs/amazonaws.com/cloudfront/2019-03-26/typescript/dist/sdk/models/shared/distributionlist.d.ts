import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionSummaryList } from "./distributionsummarylist";
/**
 * A distribution list.
**/
export declare class DistributionList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: DistributionSummaryList[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
