import { SpeakeasyBase } from "../../../internal/utils";
import { BalanceSheet } from "./balancesheet";
/**
 * BalanceSheet
 */
export declare class GetBalanceSheetResponse extends SpeakeasyBase {
    data: BalanceSheet;
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
