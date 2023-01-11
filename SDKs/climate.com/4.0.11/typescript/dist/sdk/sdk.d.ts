import { AxiosInstance } from "axios";
import { Boundaries } from "./boundaries";
import { FarmOrganizations } from "./farmorganizations";
import { Fields } from "./fields";
import { Layers } from "./layers";
import { ResourceOwners } from "./resourceowners";
import { Uploads } from "./uploads";
export declare const ServerList: readonly ["https://platform.climate.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    boundaries: Boundaries;
    farmOrganizations: FarmOrganizations;
    fields: Fields;
    layers: Layers;
    resourceOwners: ResourceOwners;
    uploads: Uploads;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
