import { SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";
/**
 * Items
 */
export declare class GetItemResponse extends SpeakeasyBase {
    data: Item;
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
