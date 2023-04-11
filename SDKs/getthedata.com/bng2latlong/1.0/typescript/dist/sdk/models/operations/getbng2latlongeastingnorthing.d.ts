import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBng2latlongEastingNorthingRequest extends SpeakeasyBase {
    /**
     * An OSGB36 (British National Grid) easting.
     */
    easting: number;
    /**
     * An OSGB36 (British National Grid) northing.
     */
    northing: number;
}
export declare enum GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum {
    Ok = "ok",
    Error = "error"
}
/**
 * A JSON object containing the original easting and northing, and the converted latitude and longitude.
 */
export declare class GetBng2latlongEastingNorthing200ApplicationJSON extends SpeakeasyBase {
    easting?: number;
    error?: string;
    latitude?: number;
    longitude?: number;
    northing?: number;
    status?: GetBng2latlongEastingNorthing200ApplicationJSONStatusEnum;
}
export declare class GetBng2latlongEastingNorthingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A JSON object containing the original easting and northing, and the converted latitude and longitude.
     */
    getBng2latlongEastingNorthing200ApplicationJSONObject?: GetBng2latlongEastingNorthing200ApplicationJSON;
}
