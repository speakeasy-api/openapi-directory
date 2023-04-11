import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProductRequest extends SpeakeasyBase {
    createProductRequest: shared.CreateProductRequest;
    /**
     * The identifier of the Organization.
     */
    organizationId: string;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the creation was successful.
     */
    productModel?: shared.ProductModel;
    /**
     * When the creation was successful.
     */
    productModelHaljson?: shared.ProductModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
