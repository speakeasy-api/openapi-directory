import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MigrationsStartForOrgRequestBodyExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsStartForOrgRequestBody extends SpeakeasyBase {
    /**
     * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
     */
    exclude?: MigrationsStartForOrgRequestBodyExcludeEnum[];
    /**
     * Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
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
     * Indicates whether projects owned by the organization or users should be excluded. from the migration.
     */
    excludeOwnerProjects?: boolean;
    /**
     * Indicates whether releases should be excluded from the migration (to reduce migration archive file size).
     */
    excludeReleases?: boolean;
    /**
     * Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
     */
    lockRepositories?: boolean;
    /**
     * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
     */
    orgMetadataOnly?: boolean;
    /**
     * A list of arrays indicating which repositories should be migrated.
     */
    repositories: string[];
}
export declare class MigrationsStartForOrgRequest extends SpeakeasyBase {
    requestBody: MigrationsStartForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class MigrationsStartForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
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
