import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Filters the result based on the authenticated user's role on each repository.
 *
 * @remarks
 *
 * * **member**: returns repositories to which the user has explicit read access
 * * **contributor**: returns repositories to which the user has explicit write access
 * * **admin**: returns repositories to which the user has explicit administrator access
 * * **owner**: returns all repositories owned by the current user
 *
 */
export declare enum GetRepositoriesRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesRequest extends SpeakeasyBase {
    /**
     * Filter the results to include only repositories created on or
     *
     * @remarks
     * after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)
     *  timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
     */
    after?: string;
    /**
     * Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     * @remarks
     * `role` parameter must also be specified.
     *
     */
    q?: string;
    /**
     * Filters the result based on the authenticated user's role on each repository.
     *
     * @remarks
     *
     * * **member**: returns repositories to which the user has explicit read access
     * * **contributor**: returns repositories to which the user has explicit write access
     * * **admin**: returns repositories to which the user has explicit administrator access
     * * **owner**: returns all repositories owned by the current user
     *
     */
    role?: GetRepositoriesRoleEnum;
    /**
     * Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     * @remarks
     *
     */
    sort?: string;
}
export declare class GetRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All public repositories.
     */
    paginatedRepositories?: shared.PaginatedRepositories;
}
