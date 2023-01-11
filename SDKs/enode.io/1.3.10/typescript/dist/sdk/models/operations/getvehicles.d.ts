import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVehiclesQueryParams extends SpeakeasyBase {
    field?: any[];
}
export declare class GetVehiclesSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
    userAccessToken2?: shared.SchemeUserAccessToken;
    userAccessToken3?: shared.SchemeUserAccessToken;
    userAccessToken4?: shared.SchemeUserAccessToken;
    userAccessToken5?: shared.SchemeUserAccessToken;
}
export declare class GetVehiclesRequest extends SpeakeasyBase {
    queryParams: GetVehiclesQueryParams;
    security: GetVehiclesSecurity;
}
export declare class GetVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
