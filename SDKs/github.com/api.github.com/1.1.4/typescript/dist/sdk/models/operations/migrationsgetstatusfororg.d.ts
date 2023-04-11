import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Allowed values that can be passed to the exclude param.
 */
export declare enum MigrationsGetStatusForOrgExcludeEnum {
    Repositories = "repositories"
}
export declare class MigrationsGetStatusForOrgRequest extends SpeakeasyBase {
    /**
     * Exclude attributes from the API response to improve performance
     */
    exclude?: MigrationsGetStatusForOrgExcludeEnum[];
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class MigrationsGetStatusForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * *   `pending`, which means the migration hasn't started yet.
     *
     * @remarks
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     */
    migration?: shared.Migration;
}
