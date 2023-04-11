import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductsPutRequest extends SpeakeasyBase {
    /**
     * Information of Product to update.
     */
    productDto: shared.ProductDto;
    /**
     * Id of Product to update.
     */
    id: number;
}
export declare class ProductsPutResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productsPut200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
