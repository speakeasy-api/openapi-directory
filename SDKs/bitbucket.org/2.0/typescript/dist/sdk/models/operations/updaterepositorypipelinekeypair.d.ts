import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
    /**
     * The created or updated SSH key pair.
     */
    requestBody: Record<string, any>;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class UpdateRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository or SSH key pair was not found.
     */
    error?: Record<string, any>;
    /**
     * The SSH key pair was created or updated.
     */
    pipelineSshKeyPair?: Record<string, any>;
}
