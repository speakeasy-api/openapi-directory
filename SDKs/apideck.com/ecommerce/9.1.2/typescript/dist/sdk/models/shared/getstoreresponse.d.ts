import { SpeakeasyBase } from "../../../internal/utils";
import { EcommerceStore } from "./ecommercestore";
/**
 * Stores
 */
export declare class GetStoreResponse extends SpeakeasyBase {
    data: EcommerceStore;
    /**
     * Operation performed
     */
    operation: string;
    /**
     * Unified API resource name
     */
    resource: string;
    /**
     * Apideck ID of service provider
     */
    service: string;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
