import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RepositoryConfigurationsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class RepositoryConfigurationsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * Include inactive configurations if none are active
     */
    includeInactive?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class RepositoryConfigurationsListDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * State of the configuration
 */
export declare enum RepositoryConfigurationsList200ApplicationJSONStateEnum {
    Unauthorized = "unauthorized",
    Inactive = "inactive",
    Active = "active"
}
export declare class RepositoryConfigurationsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * The external user id from the repository provider. Required for GitLab.com repositories
     */
    externalUserId?: string;
    /**
     * Repository configuration identifier
     */
    id: string;
    /**
     * The GitHub App Installation id. Required for repositories connected from GitHub App
     */
    installationId?: string;
    /**
     * The repository id from the repository provider. Required for repositories connected from GitHub App and GitLab.com
     */
    repoId?: string;
    /**
     * The repository's git url, must be a HTTPS URL
     */
    repoUrl: string;
    /**
     * The id of the service connection (private). Required for GitLab self-hosted repositories
     */
    serviceConnectionId?: string;
    /**
     * State of the configuration
     */
    state: RepositoryConfigurationsList200ApplicationJSONStateEnum;
    /**
     * Type of repository
     */
    type: string;
    /**
     * Email of the user who linked the repository
     */
    userEmail?: string;
}
export declare class RepositoryConfigurationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List of repository configurations
     */
    repositoryConfigurationsList200ApplicationJSONAnies?: RepositoryConfigurationsList200ApplicationJSON[];
    /**
     * Bad Request
     */
    repositoryConfigurationsListDefaultApplicationJSONObject?: RepositoryConfigurationsListDefaultApplicationJSON;
}
