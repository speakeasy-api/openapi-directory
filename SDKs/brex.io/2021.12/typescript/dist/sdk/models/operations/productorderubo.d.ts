import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductOrderUboSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Parameters for the UBO order
 */
export declare class ProductOrderUboRequestBody extends SpeakeasyBase {
    /**
     * An optional callback URL to which updates about the order will be sent (for instance if credits are exceeded)
     */
    callbackUrl?: string;
    /**
     * Specify a maximum amount of credits which should be used. To disable use -1
     */
    credits?: number;
    /**
     * Include purchase of register document to ubo report
     */
    includeDocs?: boolean;
    /**
     * Define a threshold for different levels of crawling
     */
    levels?: string;
    /**
     * Choose a matching strategy. Available options (FULL,LEVELS)
     */
    strategy?: string;
    /**
     * KYC API Id (32 byte hexid) of the company you want to place the order for
     */
    subjectId: string;
}
/**
 * Detailed information about the error
 */
export declare class ProductOrderUboDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product order details
 */
export declare class ProductOrderUbo200ApplicationJSON extends SpeakeasyBase {
    identity: string;
    option: string;
    ordered: Date;
    owner: string;
    price: number;
    sku: string;
    status: string;
    subjectId: string;
    subjectValue: string;
}
export declare class ProductOrderUboResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product order details
     */
    productOrderUbo200ApplicationJSONObject?: ProductOrderUbo200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    productOrderUboDefaultApplicationJSONObject?: ProductOrderUboDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
