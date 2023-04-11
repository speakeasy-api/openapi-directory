import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestProductRequest extends SpeakeasyBase {
    /**
     * Size parameter if available.
     */
    size?: string;
    /**
     * The url of the requested product.
     */
    url: string;
}
export declare class RequestProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    productDetailsResponse?: shared.ProductDetailsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
