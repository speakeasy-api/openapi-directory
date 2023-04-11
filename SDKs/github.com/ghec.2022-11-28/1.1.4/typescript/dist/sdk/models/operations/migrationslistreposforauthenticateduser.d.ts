import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsListReposForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class MigrationsListReposForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
}
