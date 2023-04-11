import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    /**
     * The updated known host.
     */
    requestBody: Record<string, any>;
    /**
     * The UUID of the known host to update.
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
export declare class UpdateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository or known host with the given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The known host was updated.
     */
    pipelineKnownHost?: Record<string, any>;
}
