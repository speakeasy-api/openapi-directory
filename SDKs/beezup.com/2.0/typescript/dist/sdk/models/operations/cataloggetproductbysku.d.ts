import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetProductBySkuPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CatalogGetProductBySkuQueryParams extends SpeakeasyBase {
    sku: string;
}
export declare class CatalogGetProductBySkuRequest extends SpeakeasyBase {
    pathParams: CatalogGetProductBySkuPathParams;
    queryParams: CatalogGetProductBySkuQueryParams;
}
export declare class CatalogGetProductBySkuResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    product?: any;
}
