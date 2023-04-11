import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiDeleteFormRequest extends SpeakeasyBase {
    productDeleteApiModel: shared.ProductDeleteApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiDeleteFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiDeleteForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiDeleteForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
