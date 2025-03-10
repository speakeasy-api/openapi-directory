import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProductResponse extends SpeakeasyBase {
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Product created successfully.
     */
    product?: shared.Product;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}
