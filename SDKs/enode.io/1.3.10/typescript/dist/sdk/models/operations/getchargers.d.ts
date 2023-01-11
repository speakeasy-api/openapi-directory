import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetChargersFieldEnum {
    ChargeState = "chargeState",
    Location = "location"
}
export declare class GetChargersQueryParams extends SpeakeasyBase {
    field?: GetChargersFieldEnum[];
}
export declare class GetChargersSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
    userAccessToken2?: shared.SchemeUserAccessToken;
}
export declare class GetChargersRequest extends SpeakeasyBase {
    queryParams: GetChargersQueryParams;
    security: GetChargersSecurity;
}
export declare class GetChargersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
