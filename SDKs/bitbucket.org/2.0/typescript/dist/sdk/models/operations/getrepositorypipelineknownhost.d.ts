import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    /**
     * The UUID of the known host to retrieve.
     */
    knownHostUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository or known host with the specified UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The known host.
     */
    pipelineKnownHost?: Record<string, any>;
}
