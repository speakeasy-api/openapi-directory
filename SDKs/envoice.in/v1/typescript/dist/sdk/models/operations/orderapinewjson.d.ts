import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiNewJsonRequest extends SpeakeasyBase {
    orderCreateApiModel: shared.OrderCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    orderApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    orderApiNewJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
