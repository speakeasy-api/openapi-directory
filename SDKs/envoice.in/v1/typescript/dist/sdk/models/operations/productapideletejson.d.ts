import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiDeleteJsonRequest extends SpeakeasyBase {
    productDeleteApiModel: shared.ProductDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiDeleteJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiDeleteJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiDeleteJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
