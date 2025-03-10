import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
import { PosPayment } from "./pospayment";
/**
 * PosPayments
 */
export declare class GetPosPaymentsResponse extends SpeakeasyBase {
    data: PosPayment[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
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
