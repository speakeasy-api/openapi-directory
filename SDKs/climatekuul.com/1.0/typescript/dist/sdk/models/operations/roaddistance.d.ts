import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const RoadDistanceServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class RoadDistanceRequestBody extends SpeakeasyBase {
    /**
     * Client Api Key
     */
    apiKeyL1: string;
    /**
     * Integration Partner Api Key
     */
    apiKeyL2: string;
    travelDistance: number;
    /**
     * timestamp in epoch time (like: 1606780799)
     */
    tripEnd: number;
    /**
     * timestamp in epoch time (like: 1604188800)
     */
    tripStart: number;
    /**
     * vehicle make (like: Honda, Toyota, Smart), Required only when vehicle_type is 'personal car'
     */
    vehicleMake?: string;
    /**
     * Vehicle type can be 'personal car', 'light truck' or 'heavy-duty truck'
     */
    vehicleType: string;
    /**
     * vehicle year (like: 2010, 2015, 2019), Required only when vehicle_type is 'personal car'
     */
    vehicleYear?: number;
}
export declare class RoadDistanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
