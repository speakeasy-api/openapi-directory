import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineCachesRequest extends SpeakeasyBase {
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The account.
     */
    workspace: string;
}
export declare class GetRepositoryPipelineCachesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or repository was not found.
     */
    error?: Record<string, any>;
    /**
     * The list of caches for the given repository.
     */
    paginatedPipelineCaches?: shared.PaginatedPipelineCaches;
}
