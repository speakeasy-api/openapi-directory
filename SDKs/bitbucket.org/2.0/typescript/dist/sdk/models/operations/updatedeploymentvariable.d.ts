import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateDeploymentVariableRequest extends SpeakeasyBase {
    /**
     * The updated deployment variable.
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
     * The UUID of the variable to update.
     */
    variableUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class UpdateDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The deployment variable was updated.
     */
    deploymentVariable?: Record<string, any>;
    /**
     * The account, repository, environment or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
}
