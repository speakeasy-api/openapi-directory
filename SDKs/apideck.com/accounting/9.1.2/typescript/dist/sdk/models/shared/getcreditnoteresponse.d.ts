import { SpeakeasyBase } from "../../../internal/utils";
import { CreditNote } from "./creditnote";
/**
 * Credit Note
 */
export declare class GetCreditNoteResponse extends SpeakeasyBase {
    data: CreditNote;
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
