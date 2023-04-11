import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productsPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
