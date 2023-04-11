import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the request sent by using <code>SearchPlaceIndexForPosition</code>.
 */
export declare class SearchPlaceIndexForPositionSummary extends SpeakeasyBase {
    dataSource: string;
    language?: string;
    maxResults?: number;
    position: number[];
}
