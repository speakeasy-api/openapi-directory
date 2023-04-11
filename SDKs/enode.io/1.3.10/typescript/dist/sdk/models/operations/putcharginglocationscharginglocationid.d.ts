import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
    userAccessToken?: string;
    userAccessToken1?: string;
}
export declare class PutCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
    /**
     * ID of the Charging Location
     */
    chargingLocationId: string;
    onechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;
}
export declare class PutCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
