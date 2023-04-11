import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort order. Can be either `newest`, `oldest`, or `stargazers`.
 */
export declare enum ReposListForksSortEnum {
    Newest = "newest",
    Oldest = "oldest",
    Stargazers = "stargazers",
    Watchers = "watchers"
}
export declare class ReposListForksRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * The sort order. Can be either `newest`, `oldest`, or `stargazers`.
     */
    sort?: ReposListForksSortEnum;
}
export declare class ReposListForksResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
}
