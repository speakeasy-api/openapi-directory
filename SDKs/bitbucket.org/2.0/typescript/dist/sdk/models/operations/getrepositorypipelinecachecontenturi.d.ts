import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineCacheContentURIRequest extends SpeakeasyBase {
    /**
     * The UUID of the cache.
     */
    cacheUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The account.
     */
    workspace: string;
}
export declare class GetRepositoryPipelineCacheContentURIResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace, repository or cache_uuid with given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The cache content uri.
     */
    pipelineCacheContentUri?: shared.PipelineCacheContentUri;
}
