import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContact - Returns a specific student contact
    **/
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * getContacts - Returns a list of student contacts
    **/
    getContacts(req: operations.GetContactsRequest, config?: AxiosRequestConfig): Promise<operations.GetContactsResponse>;
    /**
     * getDistrictForStudentContact - Returns the district for a student contact
    **/
    getDistrictForStudentContact(req: operations.GetDistrictForStudentContactRequest, config?: AxiosRequestConfig): Promise<operations.GetDistrictForStudentContactResponse>;
    /**
     * getStudentForContact - Returns the student for a student contact
    **/
    getStudentForContact(req: operations.GetStudentForContactRequest, config?: AxiosRequestConfig): Promise<operations.GetStudentForContactResponse>;
}
