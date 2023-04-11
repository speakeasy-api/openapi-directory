import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ConnectRequestBody extends SpeakeasyBase {
    /**
     * the endpoint to connect to expressed as either IP address or URL
     */
    endpoint: string;
}
export declare class ConnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    connect200ApplicationJSONString?: string;
}
