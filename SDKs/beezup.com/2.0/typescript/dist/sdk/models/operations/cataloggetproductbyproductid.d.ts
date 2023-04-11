import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CatalogGetProductByProductIdRequest extends SpeakeasyBase {
    /**
     * The product identifier you want to get
     */
    productId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class CatalogGetProductByProductIdResponse extends SpeakeasyBase {
    /**
     * StoreId not found
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Product
     */
    product?: shared.Product;
}
