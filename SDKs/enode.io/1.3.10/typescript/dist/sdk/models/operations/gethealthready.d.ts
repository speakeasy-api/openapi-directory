import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHealthReadyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * At least one functionality of the system is not operating nominally
     */
    getHealthReady503ApplicationJSONString?: string;
}
