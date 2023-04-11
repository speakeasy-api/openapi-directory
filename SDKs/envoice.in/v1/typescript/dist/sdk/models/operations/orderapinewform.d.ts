import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiNewFormRequest extends SpeakeasyBase {
    orderCreateApiModel: shared.OrderCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    orderApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    orderApiNewForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
