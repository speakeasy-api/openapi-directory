import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
    chargingLocationId: string;
}
export declare class DeleteCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class DeleteCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
    pathParams: DeleteCharginglocationsCharginglocationidPathParams;
    security: DeleteCharginglocationsCharginglocationidSecurity;
}
export declare class DeleteCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
