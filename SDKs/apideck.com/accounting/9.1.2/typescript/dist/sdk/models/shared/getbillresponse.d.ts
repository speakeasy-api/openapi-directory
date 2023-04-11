import { SpeakeasyBase } from "../../../internal/utils";
import { Bill } from "./bill";
/**
 * Bill
 */
export declare class GetBillResponse extends SpeakeasyBase {
    data: Bill;
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
