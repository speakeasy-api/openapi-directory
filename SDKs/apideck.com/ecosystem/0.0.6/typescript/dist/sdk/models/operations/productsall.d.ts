import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductsAllRequest extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class ProductsAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Products
     */
    getProductsResponse?: shared.GetProductsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
