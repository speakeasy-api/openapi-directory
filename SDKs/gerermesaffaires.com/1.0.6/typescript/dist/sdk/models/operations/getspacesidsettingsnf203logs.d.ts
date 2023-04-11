import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdSettingsNf203LogsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetSpacesIdSettingsNf203LogsRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
/**
 * State of activation of the logs
 */
export declare class GetSpacesIdSettingsNf203Logs200ApplicationJSON extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class GetSpacesIdSettingsNf203LogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * State of activation of the logs
     */
    getSpacesIdSettingsNf203Logs200ApplicationJSONObject?: GetSpacesIdSettingsNf203Logs200ApplicationJSON;
}
