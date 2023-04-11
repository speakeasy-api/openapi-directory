import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MigrationsGetStatusForAuthenticatedUserRequest extends SpeakeasyBase {
    exclude?: string[];
    /**
     * The unique identifier of the migration.
     */
    migrationId: number;
}
export declare class MigrationsGetStatusForAuthenticatedUserResponse extends SpeakeasyBase {
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
}
