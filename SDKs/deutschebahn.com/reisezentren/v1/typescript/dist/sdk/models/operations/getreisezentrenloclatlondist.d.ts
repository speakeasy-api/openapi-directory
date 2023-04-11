import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReisezentrenLocLatLonDistRequest extends SpeakeasyBase {
    /**
     * Radius
     */
    dist: number;
    /**
     * Latitude
     */
    lat: number;
    /**
     * Longitude
     */
    lon: number;
}
export declare class GetReisezentrenLocLatLonDistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A station was found
     */
    travelCenter?: shared.TravelCenter;
}
