import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsUnlockRepoForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
    /**
     * repo_name parameter
     */
    repoName: string;
}
export declare class MigrationsUnlockRepoForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
