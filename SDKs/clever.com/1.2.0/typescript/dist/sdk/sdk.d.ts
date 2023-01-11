import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Contacts } from "./contacts";
import { DistrictAdmins } from "./districtadmins";
import { Districts } from "./districts";
import { SchoolAdmins } from "./schooladmins";
import { Schools } from "./schools";
import { Sections } from "./sections";
import { Students } from "./students";
import { Teachers } from "./teachers";
export declare const ServerList: readonly ["https://api.clever.com/v1.2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
