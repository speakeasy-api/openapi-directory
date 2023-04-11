import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsDeleteArchiveForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
}
export declare class MigrationsDeleteArchiveForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
