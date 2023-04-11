import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiNewFormRequest extends SpeakeasyBase {
    productCreateApiModel: shared.ProductCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiNewFormResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiNewForm200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiNewForm200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
