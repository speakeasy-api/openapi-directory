import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisconnectRequestBody extends SpeakeasyBase {
    /**
     * the endpoint to disconnect from, expressed as either IP address or URL
     */
    endpoint: string;
}
export declare class DisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    disconnect200ApplicationJSONString?: string;
}
