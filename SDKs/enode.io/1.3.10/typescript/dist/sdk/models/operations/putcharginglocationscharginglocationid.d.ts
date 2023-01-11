import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
    chargingLocationId: string;
}
export declare class PutCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class PutCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
    pathParams: PutCharginglocationsCharginglocationidPathParams;
    request?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;
    security: PutCharginglocationsCharginglocationidSecurity;
}
export declare class PutCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
