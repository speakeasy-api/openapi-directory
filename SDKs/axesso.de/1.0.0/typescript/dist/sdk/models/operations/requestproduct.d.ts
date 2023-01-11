import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestProductQueryParams extends SpeakeasyBase {
    size?: string;
    url: string;
}
export declare class RequestProductRequest extends SpeakeasyBase {
    queryParams: RequestProductQueryParams;
}
export declare class RequestProductResponse extends SpeakeasyBase {
    contentType: string;
    productDetailsResponse?: shared.ProductDetailsResponse;
    statusCode: number;
}
