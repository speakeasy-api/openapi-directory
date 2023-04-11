import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrderApiDeleteFormRequest extends SpeakeasyBase {
    orderDeleteApiModel: shared.OrderDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    orderApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    orderApiDeleteForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
