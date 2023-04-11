import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Notes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create note
     *
     * @remarks
     * Create note
     */
    notesAdd(req: operations.NotesAddRequest, security: operations.NotesAddSecurity, config?: AxiosRequestConfig): Promise<operations.NotesAddResponse>;
    /**
     * List notes
     *
     * @remarks
     * List notes
     */
    notesAll(req: operations.NotesAllRequest, security: operations.NotesAllSecurity, config?: AxiosRequestConfig): Promise<operations.NotesAllResponse>;
    /**
     * Delete note
     *
     * @remarks
     * Delete note
     */
    notesDelete(req: operations.NotesDeleteRequest, security: operations.NotesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.NotesDeleteResponse>;
    /**
     * Get note
     *
     * @remarks
     * Get note
     */
    notesOne(req: operations.NotesOneRequest, security: operations.NotesOneSecurity, config?: AxiosRequestConfig): Promise<operations.NotesOneResponse>;
    /**
     * Update note
     *
     * @remarks
     * Update note
     */
    notesUpdate(req: operations.NotesUpdateRequest, security: operations.NotesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.NotesUpdateResponse>;
}
