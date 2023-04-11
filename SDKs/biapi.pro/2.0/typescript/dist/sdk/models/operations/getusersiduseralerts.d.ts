import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdUserAlertsRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * Hint: you can use 'me' or 'all'
     */
    idUser: string;
}
/**
 * alerts
 */
export declare class GetUsersIdUserAlerts200ApplicationJSON extends SpeakeasyBase {
    alerts: shared.Alert[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetUsersIdUserAlertsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * alerts
     */
    getUsersIdUserAlerts200ApplicationJSONObject?: GetUsersIdUserAlerts200ApplicationJSON;
}
