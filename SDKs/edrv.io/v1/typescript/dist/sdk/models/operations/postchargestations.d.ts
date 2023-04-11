import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Returns the newly created chargestion object
 */
export declare class PostChargeStations201ApplicationJSON extends SpeakeasyBase {
    chargestation?: Record<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class PostChargeStationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the newly created chargestion object
     */
    postChargeStations201ApplicationJSONObject?: PostChargeStations201ApplicationJSON;
}
