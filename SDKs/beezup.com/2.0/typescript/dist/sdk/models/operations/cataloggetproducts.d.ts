import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetProductsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetProductsRequest extends SpeakeasyBase {
    pathParams: CatalogGetProductsPathParams;
    request: shared.GetProductsRequest;
}
export declare class CatalogGetProductsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    productList?: shared.ProductList;
}
