import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiNewJsonRequest extends SpeakeasyBase {
    productCreateApiModel: shared.ProductCreateApiModel;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiNewJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    productApiNewJSON200ApplicationJSONInt32Integer?: number;
    /**
     * OK
     */
    productApiNewJSON200TextJSONInt32Integer?: number;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
