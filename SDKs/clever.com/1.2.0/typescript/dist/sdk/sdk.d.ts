import { Contacts } from "./contacts";
import { DistrictAdmins } from "./districtadmins";
import { Districts } from "./districts";
import * as shared from "./models/shared";
import { SchoolAdmins } from "./schooladmins";
import { Schools } from "./schools";
import { Sections } from "./sections";
import { Students } from "./students";
import { Teachers } from "./teachers";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.clever.com/v1.2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Serves the Clever Data API
 */
export declare class SDK {
    contacts: Contacts;
    districtAdmins: DistrictAdmins;
    districts: Districts;
    schoolAdmins: SchoolAdmins;
    schools: Schools;
    sections: Sections;
    students: Students;
    teachers: Teachers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
