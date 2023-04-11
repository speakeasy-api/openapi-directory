import { SpeakeasyBase } from "../../../internal/utils";
import { GeoMatchSetSummary } from "./geomatchsetsummary";
/**
 * Success
 */
export declare class ListGeoMatchSetsResponse extends SpeakeasyBase {
    geoMatchSets?: GeoMatchSetSummary[];
    nextMarker?: string;
}
