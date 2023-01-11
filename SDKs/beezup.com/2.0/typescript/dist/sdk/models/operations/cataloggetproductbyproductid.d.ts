import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CatalogGetProductByProductIdPathParams extends SpeakeasyBase {
    productId: string;
    storeId: string;
}
export declare class CatalogGetProductByProductIdRequest extends SpeakeasyBase {
    pathParams: CatalogGetProductByProductIdPathParams;
}
export declare class CatalogGetProductByProductIdResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    product?: any;
}
