import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateEnvironmentRequest extends SpeakeasyBase {
    /**
     * The environment to create.
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
export declare class CreateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The environment was created.
     */
    deploymentEnvironment?: Record<string, any>;
    /**
     * The account or repository does not exist.
     */
    error?: Record<string, any>;
}
