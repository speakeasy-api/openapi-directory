import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RepositoryConfigurationsCreateOrUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The repository information
 */
export declare class RepositoryConfigurationsCreateOrUpdateRequestBody extends SpeakeasyBase {
    /**
     * The external user id from the repository provider. Required for GitLab.com repositories
     */
    externalUserId?: string;
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
}
export declare class RepositoryConfigurationsCreateOrUpdateRequest extends SpeakeasyBase {
    /**
     * The repository information
     */
    requestBody: RepositoryConfigurationsCreateOrUpdateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class RepositoryConfigurationsCreateOrUpdateDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
/**
 * Success
 */
export declare class RepositoryConfigurationsCreateOrUpdate200ApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class RepositoryConfigurationsCreateOrUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    repositoryConfigurationsCreateOrUpdate200ApplicationJSONObject?: RepositoryConfigurationsCreateOrUpdate200ApplicationJSON;
    /**
     * Bad Request
     */
    repositoryConfigurationsCreateOrUpdateDefaultApplicationJSONObject?: RepositoryConfigurationsCreateOrUpdateDefaultApplicationJSON;
}
