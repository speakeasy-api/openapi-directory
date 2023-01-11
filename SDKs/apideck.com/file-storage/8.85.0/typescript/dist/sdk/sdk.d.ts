import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { DriveGroups } from "./drivegroups";
import { Drives } from "./drives";
import { Files } from "./files";
import { Folders } from "./folders";
import { SharedLinks } from "./sharedlinks";
import { UploadSessions } from "./uploadsessions";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    driveGroups: DriveGroups;
    drives: Drives;
    files: Files;
    folders: Folders;
    sharedLinks: SharedLinks;
    uploadSessions: UploadSessions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
