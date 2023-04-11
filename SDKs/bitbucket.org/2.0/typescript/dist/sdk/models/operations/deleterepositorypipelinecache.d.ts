import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRepositoryPipelineCacheRequest extends SpeakeasyBase {
    /**
     * The UUID of the cache to delete.
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
export declare class DeleteRepositoryPipelineCacheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace, repository or cache_uuid with given UUID was not found.
     */
    error?: Record<string, any>;
}
