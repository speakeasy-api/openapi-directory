import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Person {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of people
     *
     * @remarks
     * Each series, season, and episode has a Credits section where you may add people and roles.
     * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
     * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
     *
     */
    getPeople(req: operations.GetPeopleRequest, security: operations.GetPeopleSecurity, config?: AxiosRequestConfig): Promise<operations.GetPeopleResponse>;
    /**
     * Get a specific person
     *
     * @remarks
     * Each series, season, and episode has a Credits section where you may add people and roles.
     * This is an internal tool to recognize contributors. It is not related to ART19 users or account permissions.
     * Each Person added will have no additional access or permissions granted as a result of being included in the Credits section.
     *
     */
    getPeopleId(req: operations.GetPeopleIdRequest, security: operations.GetPeopleIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetPeopleIdResponse>;
}
