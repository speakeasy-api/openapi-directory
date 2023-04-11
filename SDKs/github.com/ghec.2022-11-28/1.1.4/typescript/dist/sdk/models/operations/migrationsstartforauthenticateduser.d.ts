import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allowed values that can be passed to the exclude param.
 */
export declare enum MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsStartForAuthenticatedUserRequestBody extends SpeakeasyBase {
    /**
     * Exclude attributes from the API response to improve performance
     */
    exclude?: MigrationsStartForAuthenticatedUserRequestBodyExcludeEnum[];
    /**
     * Do not include attachments in the migration
     */
    excludeAttachments?: boolean;
    /**
     * Indicates whether the repository git data should be excluded from the migration.
     */
    excludeGitData?: boolean;
    /**
     * Indicates whether metadata should be excluded and only git source should be included for the migration.
     */
    excludeMetadata?: boolean;
    /**
     * Indicates whether projects owned by the organization or users should be excluded.
     */
    excludeOwnerProjects?: boolean;
    /**
     * Do not include releases in the migration
     */
    excludeReleases?: boolean;
    /**
     * Lock the repositories being migrated at the start of the migration
     */
    lockRepositories?: boolean;
    /**
     * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
     */
    orgMetadataOnly?: boolean;
    repositories: string[];
}
export declare class MigrationsStartForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    migration?: shared.Migration;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
