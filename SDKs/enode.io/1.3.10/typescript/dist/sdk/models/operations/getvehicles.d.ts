import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVehiclesSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
    userAccessToken2?: string;
    userAccessToken3?: string;
    userAccessToken4?: string;
    userAccessToken5?: string;
}
export declare class GetVehiclesRequest extends SpeakeasyBase {
    /**
     * An optional array of Vehicle fields that should be included in the response, for example: `?field[]=information&field[]=location`
     *
     * @remarks
     *
     * By default, no fields are included and only the Vehicle ID will be returned. Response time may be impacted by which fields you request.
     */
    field?: any[];
}
export declare class GetVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
