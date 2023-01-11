import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCharginglocationsSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class GetCharginglocationsRequest extends SpeakeasyBase {
    security: GetCharginglocationsSecurity;
}
export declare class GetCharginglocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onechargingLocationsPostRequestBodyContentApplication1jsonSchemas?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[];
}
