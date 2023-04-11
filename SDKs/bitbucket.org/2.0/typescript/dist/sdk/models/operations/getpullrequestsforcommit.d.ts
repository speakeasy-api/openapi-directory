import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPullrequestsForCommitRequest extends SpeakeasyBase {
    /**
     * The SHA1 of the commit
     */
    commit: string;
    /**
     * Which page to retrieve
     */
    page?: number;
    /**
     * How many pull requests to retrieve per page
     */
    pagelen?: number;
    /**
     * The repository; either the UUID in curly braces, or the slug
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
     */
    workspace: string;
}
export declare class GetPullrequestsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Either the repository does not exist, or pull request commit links have not yet been indexed.
     */
    error?: Record<string, any>;
    /**
     * The paginated list of pull requests.
     */
    paginatedPullrequests?: shared.PaginatedPullrequests;
}
