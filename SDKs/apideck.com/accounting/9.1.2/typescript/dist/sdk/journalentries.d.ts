import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class JournalEntries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Journal Entry
     *
     * @remarks
     * Create Journal Entry
     */
    journalEntriesAdd(req: operations.JournalEntriesAddRequest, security: operations.JournalEntriesAddSecurity, config?: AxiosRequestConfig): Promise<operations.JournalEntriesAddResponse>;
    /**
     * List Journal Entries
     *
     * @remarks
     * List Journal Entries
     */
    journalEntriesAll(req: operations.JournalEntriesAllRequest, security: operations.JournalEntriesAllSecurity, config?: AxiosRequestConfig): Promise<operations.JournalEntriesAllResponse>;
    /**
     * Delete Journal Entry
     *
     * @remarks
     * Delete Journal Entry
     */
    journalEntriesDelete(req: operations.JournalEntriesDeleteRequest, security: operations.JournalEntriesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.JournalEntriesDeleteResponse>;
    /**
     * Get Journal Entry
     *
     * @remarks
     * Get Journal Entry
     */
    journalEntriesOne(req: operations.JournalEntriesOneRequest, security: operations.JournalEntriesOneSecurity, config?: AxiosRequestConfig): Promise<operations.JournalEntriesOneResponse>;
    /**
     * Update Journal Entry
     *
     * @remarks
     * Update Journal Entry
     */
    journalEntriesUpdate(req: operations.JournalEntriesUpdateRequest, security: operations.JournalEntriesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.JournalEntriesUpdateResponse>;
}
