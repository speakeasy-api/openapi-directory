import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
    chargingLocationId: string;
}
export declare class GetCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class GetCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
    pathParams: GetCharginglocationsCharginglocationidPathParams;
    security: GetCharginglocationsCharginglocationidSecurity;
}
export declare class GetCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
