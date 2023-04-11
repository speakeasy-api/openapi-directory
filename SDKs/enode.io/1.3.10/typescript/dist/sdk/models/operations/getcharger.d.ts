import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChargerSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
    userAccessToken2?: string;
}
export declare class GetChargerRequest extends SpeakeasyBase {
    /**
     * ID of the Charger
     */
    chargerId: string;
    /**
     * An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState`
     *
     * @remarks
     *
     * By default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.
     */
    field?: shared.OnechargersGetParameters0Enum[];
}
export declare class GetCharger200ApplicationJSONChargeState extends SpeakeasyBase {
    /**
     * The current charge rate in kW.
     *
     * @remarks
     *
     * This property is only available when the charger is actively charging a vehicle, and is `null` any other time.
     */
    chargeRate?: number;
    /**
     * Current charging status
     */
    isCharging?: boolean;
    /**
     * Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)
     */
    isPluggedIn?: boolean;
}
/**
 * Descriptive information about the Charger
 */
export declare class GetCharger200ApplicationJSONInformation extends SpeakeasyBase {
    /**
     * Charger brand
     */
    brand?: string;
    /**
     * Charger ID
     */
    id?: string;
    /**
     * Charger model
     */
    model?: string;
    /**
     * Charger production year
     */
    year?: number;
}
/**
 * Successful
 */
export declare class GetCharger200ApplicationJSON extends SpeakeasyBase {
    chargeState?: GetCharger200ApplicationJSONChargeState;
    /**
     * Charger ID
     */
    id?: string;
    /**
     * Descriptive information about the Charger
     */
    information?: GetCharger200ApplicationJSONInformation;
    /**
     * Is the charger currently reachable?
     */
    isReachable?: boolean;
    /**
     * The last time the charger was successfully communicated with
     */
    lastSeen?: Date;
}
export declare class GetChargerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    getCharger200ApplicationJSONObject?: GetCharger200ApplicationJSON;
}
