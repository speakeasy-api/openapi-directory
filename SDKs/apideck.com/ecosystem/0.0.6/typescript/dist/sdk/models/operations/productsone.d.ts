import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductsOneRequest extends SpeakeasyBase {
    ecosystemId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
}
export declare class ProductsOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product
     */
    getProductResponse?: shared.GetProductResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
