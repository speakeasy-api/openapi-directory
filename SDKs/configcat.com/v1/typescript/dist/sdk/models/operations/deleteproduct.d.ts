import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProductRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
