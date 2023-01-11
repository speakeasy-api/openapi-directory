import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of distribution IDs.
**/
export declare class DistributionIdList extends SpeakeasyBase {
    isTruncated: boolean;
    items?: Record<string, any>[];
    marker: string;
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
