import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the product data returned.
     */
    productModel?: shared.ProductModel;
    /**
     * When everything is ok, the product data returned.
     */
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
