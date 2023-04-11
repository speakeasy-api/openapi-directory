import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateRepositoryPipelineKnownHostRequest extends SpeakeasyBase {
    /**
     * The known host to create.
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
export declare class CreateRepositoryPipelineKnownHostResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or repository does not exist.
     */
    error?: Record<string, any>;
    /**
     * The known host was created.
     */
    pipelineKnownHost?: Record<string, any>;
}
