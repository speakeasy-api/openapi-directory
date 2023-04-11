import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateDeploymentVariableRequest extends SpeakeasyBase {
    /**
     * The variable to create
     */
    requestBody: Record<string, any>;
    /**
     * The environment.
     */
    environmentUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class CreateDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The variable was created.
     */
    deploymentVariable?: Record<string, any>;
    /**
     * The account, repository, environment or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
}
