import { AxiosInstance } from "axios";
import { ApiInfo } from "./apiinfo";
import { Authentication } from "./authentication";
import { ContainerGroups } from "./containergroups";
import { FileShares } from "./fileshares";
import { Images } from "./images";
import { PrivateDockerImagesRegistry } from "./privatedockerimagesregistry";
import { PublicIpAddresses } from "./publicipaddresses";
import { Quota } from "./quota";
import { SingleContainers } from "./singlecontainers";
import { Volumes } from "./volumes";
export declare const ServerList: readonly ["https://containers-api.ng.bluemix.net/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apiInfo: ApiInfo;
    authentication: Authentication;
    containerGroups: ContainerGroups;
    fileShares: FileShares;
    images: Images;
    privateDockerImagesRegistry: PrivateDockerImagesRegistry;
    publicIPAddresses: PublicIpAddresses;
    quota: Quota;
    singleContainers: SingleContainers;
    volumes: Volumes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
