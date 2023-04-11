import { SpeakeasyBase } from "../../../internal/utils";
import { Supplier } from "./supplier";
/**
 * Supplier
 */
export declare class GetSupplierResponse extends SpeakeasyBase {
    data: Supplier;
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
