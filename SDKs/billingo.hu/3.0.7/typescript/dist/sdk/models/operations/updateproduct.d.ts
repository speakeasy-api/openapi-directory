import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProductPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    pathParams: UpdateProductPathParams;
    request: shared.ProductInput;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    product?: shared.Product;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
