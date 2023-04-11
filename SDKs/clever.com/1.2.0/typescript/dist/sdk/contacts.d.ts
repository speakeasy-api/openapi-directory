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
     * Returns a specific student contact
     */
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * Returns a list of student contacts
     */
    getContacts(req: operations.GetContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsResponse>;
    /**
     * Returns the district for a student contact
     */
    getDistrictForStudentContact(req: operations.GetDistrictForStudentContactRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForStudentContactResponse>;
    /**
     * Returns the student for a student contact
     */
    getStudentForContact(req: operations.GetStudentForContactRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentForContactResponse>;
}
