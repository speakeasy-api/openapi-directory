import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReisezentrenLocLatLonRequest extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat: number;
    /**
     * Longitude
     */
    lon: number;
}
export declare class GetReisezentrenLocLatLonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A station was found
     */
    travelCenter?: shared.TravelCenter;
}
