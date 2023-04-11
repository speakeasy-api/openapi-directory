import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateRepositoryPipelineVariableRequest extends SpeakeasyBase {
    /**
     * The updated variable
     */
    requestBody: Record<string, any>;
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
export declare class UpdateRepositoryPipelineVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account, repository or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable was updated.
     */
    pipelineVariable?: Record<string, any>;
}
