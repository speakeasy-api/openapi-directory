import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Get a Collection
 */
export declare class GetCollectionResponse extends SpeakeasyBase {
    data: Collection;
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
