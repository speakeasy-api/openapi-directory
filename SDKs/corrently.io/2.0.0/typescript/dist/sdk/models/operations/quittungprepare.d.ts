import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungPrepareRequestBody extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungPrepareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    quittungPrepare200ApplicationJSONString?: string;
}
