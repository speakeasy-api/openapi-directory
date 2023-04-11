import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDeploymentVariableRequest extends SpeakeasyBase {
    /**
     * The environment.
     */
    environmentUuid: string;
    /**
     * The repository.
     */
    repoSlug: string;
    /**
     * The UUID of the variable to delete.
     */
    variableUuid: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example `{workspace UUID}`.
     */
    workspace: string;
}
export declare class DeleteDeploymentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository, environment or variable with given UUID was not found.
     */
    error?: Record<string, any>;
}
