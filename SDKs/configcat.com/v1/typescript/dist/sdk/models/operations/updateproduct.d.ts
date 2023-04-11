import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateProductRequest extends SpeakeasyBase {
    updateProductRequest: shared.UpdateProductRequest;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    contentType: string;
    productModel?: shared.ProductModel;
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
