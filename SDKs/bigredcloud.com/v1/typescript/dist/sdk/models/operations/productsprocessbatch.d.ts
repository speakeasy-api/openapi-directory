import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsProcessBatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productsProcessBatch200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
