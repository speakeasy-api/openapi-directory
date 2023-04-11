import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRepositoryPipelineCachesRequest extends SpeakeasyBase {
    /**
     * The cache name.
     */
    name: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The account.
     */
    workspace: string;
}
export declare class DeleteRepositoryPipelineCachesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The workspace, repository or cache name was not found.
     */
    error?: Record<string, any>;
}
