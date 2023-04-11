import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create contact
     *
     * @remarks
     * Create contact
     */
    contactsAdd(req: operations.ContactsAddRequest, security: operations.ContactsAddSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsAddResponse>;
    /**
     * List contacts
     *
     * @remarks
     * List contacts
     */
    contactsAll(req: operations.ContactsAllRequest, security: operations.ContactsAllSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsAllResponse>;
    /**
     * Delete contact
     *
     * @remarks
     * Delete contact
     */
    contactsDelete(req: operations.ContactsDeleteRequest, security: operations.ContactsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsDeleteResponse>;
    /**
     * Get contact
     *
     * @remarks
     * Get contact
     */
    contactsOne(req: operations.ContactsOneRequest, security: operations.ContactsOneSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsOneResponse>;
    /**
     * Update contact
     *
     * @remarks
     * Update contact
     */
    contactsUpdate(req: operations.ContactsUpdateRequest, security: operations.ContactsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsUpdateResponse>;
}
