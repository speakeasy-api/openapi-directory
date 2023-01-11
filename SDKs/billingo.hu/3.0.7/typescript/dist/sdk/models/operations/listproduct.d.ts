import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListProductQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListProductRequest extends SpeakeasyBase {
    queryParams: ListProductQueryParams;
}
export declare class ListProductResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    productList?: shared.ProductList;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
