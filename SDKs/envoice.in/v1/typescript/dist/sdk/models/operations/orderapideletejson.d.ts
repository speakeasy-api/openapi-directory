import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiDeleteJsonRequest extends SpeakeasyBase {
    orderDeleteApiModel: shared.OrderDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    orderApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    orderApiDeleteJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
