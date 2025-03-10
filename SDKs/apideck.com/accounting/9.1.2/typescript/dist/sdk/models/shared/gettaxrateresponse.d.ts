import { SpeakeasyBase } from "../../../internal/utils";
import { TaxRate } from "./taxrate";
/**
 * TaxRate
 */
export declare class GetTaxRateResponse extends SpeakeasyBase {
    data: TaxRate;
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
