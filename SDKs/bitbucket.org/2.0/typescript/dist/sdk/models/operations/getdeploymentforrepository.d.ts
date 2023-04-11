import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeploymentForRepositoryRequest extends SpeakeasyBase {
    /**
     * The deployment UUID.
     */
    deploymentUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class GetDeploymentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The deployment.
     */
    deployment?: Record<string, any>;
    /**
     * No account, repository or deployment with the UUID provided exists.
     */
    error?: Record<string, any>;
}
