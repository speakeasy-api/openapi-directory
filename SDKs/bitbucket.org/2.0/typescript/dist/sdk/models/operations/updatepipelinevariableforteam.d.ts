import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatePipelineVariableForTeamRequest extends SpeakeasyBase {
    /**
     * The updated variable.
     */
    requestBody: Record<string, any>;
    /**
     * The account.
     */
    username: string;
    /**
     * The UUID of the variable.
     */
    variableUuid: string;
}
export declare class UpdatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or the variable was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable was updated.
     */
    pipelineVariable?: Record<string, any>;
}
