import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetEnvironmentForRepositoryRequest extends SpeakeasyBase {
    /**
     * The environment UUID.
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
export declare class GetEnvironmentForRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The environment.
     */
    deploymentEnvironment?: Record<string, any>;
    /**
     * No account, repository or environment with the UUID provided exists.
     */
    error?: Record<string, any>;
}
