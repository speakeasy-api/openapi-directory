import { SpeakeasyBase } from "../../../internal/utils";
import { LatLong } from "./latlong";
import { OsmId } from "./osmid";
export declare class Place extends SpeakeasyBase {
    country?: string;
    geohash?: string;
    google?: string;
    latLong?: LatLong;
    name?: string;
    osm?: OsmId;
}
