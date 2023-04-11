import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsDeleteRequest extends SpeakeasyBase {
    /**
     * Id of Product to remove.
     */
    id: number;
    /**
     * Timestamp of Product to remove. Should be encoded in Base64.
     */
    timestamp: string;
}
export declare class ProductsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productsDelete200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
