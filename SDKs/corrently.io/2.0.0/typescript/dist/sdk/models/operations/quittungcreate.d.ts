import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungCreateRequestBody extends SpeakeasyBase {
    email?: string;
}
export declare class QuittungCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    quittungCreate200ApplicationJSONString?: string;
}
