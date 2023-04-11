import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppsListReposAccessibleToInstallationRequest extends SpeakeasyBase {
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
 * Response
 */
export declare class AppsListReposAccessibleToInstallation200ApplicationJSON extends SpeakeasyBase {
    repositories: shared.Repository[];
    repositorySelection?: string;
    totalCount: number;
}
export declare class AppsListReposAccessibleToInstallationResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    appsListReposAccessibleToInstallation200ApplicationJSONObject?: AppsListReposAccessibleToInstallation200ApplicationJSON;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
