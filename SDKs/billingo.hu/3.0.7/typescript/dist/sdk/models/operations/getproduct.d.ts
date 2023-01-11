import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetProductRequest extends SpeakeasyBase {
    pathParams: GetProductPathParams;
}
export declare class GetProductResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    product?: shared.Product;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
