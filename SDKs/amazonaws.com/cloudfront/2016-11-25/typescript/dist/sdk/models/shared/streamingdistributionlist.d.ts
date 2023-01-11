import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingDistributionSummaryList } from "./streamingdistributionsummarylist";
/**
 * A streaming distribution list.
**/
export declare class StreamingDistributionList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: StreamingDistributionSummaryList[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
