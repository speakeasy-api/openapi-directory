import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetRandomProductsPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetRandomProductsRequest extends SpeakeasyBase {
    pathParams: CatalogGetRandomProductsPathParams;
}
export declare class CatalogGetRandomProductsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    randomProductList?: shared.RandomProductList;
}
