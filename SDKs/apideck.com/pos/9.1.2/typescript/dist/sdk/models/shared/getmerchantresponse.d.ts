import { SpeakeasyBase } from "../../../internal/utils";
import { Merchant } from "./merchant";
/**
 * Merchants
 */
export declare class GetMerchantResponse extends SpeakeasyBase {
    data: Merchant;
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
