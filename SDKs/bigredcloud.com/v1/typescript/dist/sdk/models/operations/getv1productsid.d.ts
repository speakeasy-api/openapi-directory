import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1ProductsIdRequest extends SpeakeasyBase {
    /**
     * Id of Product to return.
     */
    id: number;
}
export declare class GetV1ProductsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    productDto?: shared.ProductDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
