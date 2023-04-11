import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CreditNotes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Credit Note
     *
     * @remarks
     * Create Credit Note
     */
    creditNotesAdd(req: operations.CreditNotesAddRequest, security: operations.CreditNotesAddSecurity, config?: AxiosRequestConfig): Promise<operations.CreditNotesAddResponse>;
    /**
     * List Credit Notes
     *
     * @remarks
     * List Credit Notes
     */
    creditNotesAll(req: operations.CreditNotesAllRequest, security: operations.CreditNotesAllSecurity, config?: AxiosRequestConfig): Promise<operations.CreditNotesAllResponse>;
    /**
     * Delete Credit Note
     *
     * @remarks
     * Delete Credit Note
     */
    creditNotesDelete(req: operations.CreditNotesDeleteRequest, security: operations.CreditNotesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CreditNotesDeleteResponse>;
    /**
     * Get Credit Note
     *
     * @remarks
     * Get Credit Note
     */
    creditNotesOne(req: operations.CreditNotesOneRequest, security: operations.CreditNotesOneSecurity, config?: AxiosRequestConfig): Promise<operations.CreditNotesOneResponse>;
    /**
     * Update Credit Note
     *
     * @remarks
     * Update Credit Note
     */
    creditNotesUpdate(req: operations.CreditNotesUpdateRequest, security: operations.CreditNotesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CreditNotesUpdateResponse>;
}
