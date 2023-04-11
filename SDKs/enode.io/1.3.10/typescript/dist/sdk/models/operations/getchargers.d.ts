import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChargersSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
    userAccessToken2?: string;
}
export declare enum GetChargersFieldEnum {
    ChargeState = "chargeState",
    Location = "location"
}
export declare class GetChargersRequest extends SpeakeasyBase {
    /**
     * An optional array of Charger fields that should be included in the response, for example: `?field[]=information&field[]=chargeState`
     *
     * @remarks
     *
     * By default, no optional fields are included and only the Charger ID will be returned. Response time will generally be slower the more fields you request.
     */
    field?: GetChargersFieldEnum[];
}
export declare class GetChargersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
