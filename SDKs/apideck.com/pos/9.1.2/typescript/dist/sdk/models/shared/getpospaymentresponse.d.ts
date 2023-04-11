import { SpeakeasyBase } from "../../../internal/utils";
import { PosPayment } from "./pospayment";
/**
 * PosPayments
 */
export declare class GetPosPaymentResponse extends SpeakeasyBase {
    data: PosPayment;
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
