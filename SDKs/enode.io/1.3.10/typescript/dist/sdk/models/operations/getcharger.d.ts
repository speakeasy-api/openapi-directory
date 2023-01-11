import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChargerPathParams extends SpeakeasyBase {
    chargerId: string;
}
export declare class GetChargerQueryParams extends SpeakeasyBase {
    field?: shared.OnechargersGetParameters0Enum[];
}
export declare class GetChargerSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
    userAccessToken2?: shared.SchemeUserAccessToken;
}
export declare class GetCharger200ApplicationJsonChargeState extends SpeakeasyBase {
    chargeRate?: number;
    isCharging?: boolean;
    isPluggedIn?: boolean;
}
/**
 * Descriptive information about the Charger
**/
export declare class GetCharger200ApplicationJsonInformation extends SpeakeasyBase {
    brand?: string;
    id?: string;
    model?: string;
    year?: number;
}
export declare class GetCharger200ApplicationJson extends SpeakeasyBase {
    chargeState?: GetCharger200ApplicationJsonChargeState;
    id?: string;
    information?: GetCharger200ApplicationJsonInformation;
    isReachable?: boolean;
    lastSeen?: Date;
}
export declare class GetChargerRequest extends SpeakeasyBase {
    pathParams: GetChargerPathParams;
    queryParams: GetChargerQueryParams;
    security: GetChargerSecurity;
}
export declare class GetChargerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getCharger200ApplicationJSONObject?: GetCharger200ApplicationJson;
}
