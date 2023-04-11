import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsListInstallationReposForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * installation_id parameter
     */
    installationId: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * The access the user has to each repository is included in the hash under the `permissions` key.
 */
export declare class AppsListInstallationReposForAuthenticatedUser200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.Repository[];
    repositorySelection?: string;
    totalCount: number;
}
export declare class AppsListInstallationReposForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The access the user has to each repository is included in the hash under the `permissions` key.
     */
    appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject?: AppsListInstallationReposForAuthenticatedUser200ApplicationJSON;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
