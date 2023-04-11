import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCharginglocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    onechargingLocationsPostRequestBodyContentApplication1jsonSchemas?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[];
}
