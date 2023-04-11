import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RepositoriesListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The selected form of the object
 */
export declare enum RepositoriesListFormEnum {
    Lite = "lite",
    Full = "full"
}
/**
 * The source host
 */
export declare enum RepositoriesListSourceHostEnum {
    Github = "github",
    Bitbucket = "bitbucket",
    Vsts = "vsts",
    Gitlab = "gitlab"
}
export declare class RepositoriesListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The selected form of the object
     */
    form?: RepositoriesListFormEnum;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The id of the service connection (private). Required for GitLab self-hosted repositories
     */
    serviceConnectionId?: string;
    /**
     * The source host
     */
    sourceHost: RepositoriesListSourceHostEnum;
    /**
     * Filter repositories only for specified account and project, "vstsProjectId" is required
     */
    vstsAccountName?: string;
    /**
     * Filter repositories only for specified account and project, "vstsAccountName" is required
     */
    vstsProjectId?: string;
}
/**
 * Bad Request
 */
export declare class RepositoriesListDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * The source repository
 */
export declare class RepositoriesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * URL used to clone the repository
     */
    cloneUrl?: string;
    /**
     * The repository name
     */
    name?: string;
}
export declare class RepositoriesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    repositoriesList200ApplicationJSONObjects?: RepositoriesList200ApplicationJSON[];
    /**
     * Bad Request
     */
    repositoriesListDefaultApplicationJSONObject?: RepositoriesListDefaultApplicationJSON;
}
