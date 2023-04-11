import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
/**
 * Payment
 */
export declare class GetPaymentResponse extends SpeakeasyBase {
    data: Payment;
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
