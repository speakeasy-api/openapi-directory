import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCharginglocationsSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class PostCharginglocationsRequestBodyInput extends SpeakeasyBase {
    /**
     * Latitude in degrees
     */
    latitude?: number;
    /**
     * Longitude in degrees
     */
    longitude?: number;
    /**
     * User-supplied name for the Charging Location
     */
    name?: string;
}
export declare class PostCharginglocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
