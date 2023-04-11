import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPermissionsRepositoriesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetUserPermissionsRepositoriesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    q?: string;
    /**
     *
     * @remarks
     * Name of a response property sort the result by as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    sort?: string;
}
export declare class GetUserPermissionsRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Repository permissions for the repositories a caller has explicit access to.
     */
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
