import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
 */
export declare enum ReposListForUserDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Can be one of `created`, `updated`, `pushed`, `full_name`.
 */
export declare enum ReposListForUserSortEnum {
    Created = "created",
    Updated = "updated",
    Pushed = "pushed",
    FullName = "full_name"
}
/**
 * Can be one of `all`, `owner`, `member`.
 */
export declare enum ReposListForUserTypeEnum {
    All = "all",
    Owner = "owner",
    Member = "member"
}
export declare class ReposListForUserRequest extends SpeakeasyBase {
    /**
     * Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
     */
    direction?: ReposListForUserDirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * Can be one of `created`, `updated`, `pushed`, `full_name`.
     */
    sort?: ReposListForUserSortEnum;
    /**
     * Can be one of `all`, `owner`, `member`.
     */
    type?: ReposListForUserTypeEnum;
    username: string;
}
export declare class ReposListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
}
