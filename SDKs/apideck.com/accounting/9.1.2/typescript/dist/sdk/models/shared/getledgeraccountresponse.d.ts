import { SpeakeasyBase } from "../../../internal/utils";
/**
 * LedgerAccount
 */
export declare class GetLedgerAccountResponse extends SpeakeasyBase {
    data: Record<string, any>;
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
