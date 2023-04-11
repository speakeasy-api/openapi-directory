import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class QuittungComitRequestBody extends SpeakeasyBase {
    account?: string;
}
export declare class QuittungComitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    quittungComit200ApplicationJSONString?: string;
}
