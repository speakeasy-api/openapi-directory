import { SpeakeasyBase } from "../../../internal/utils";
import { JournalEntry } from "./journalentry";
/**
 * JournalEntries
 */
export declare class GetJournalEntryResponse extends SpeakeasyBase {
    data: JournalEntry;
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
