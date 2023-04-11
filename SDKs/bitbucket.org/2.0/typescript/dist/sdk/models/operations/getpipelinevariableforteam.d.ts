import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPipelineVariableForTeamRequest extends SpeakeasyBase {
    /**
     * The account.
     */
    username: string;
    /**
     * The UUID of the variable to retrieve.
     */
    variableUuid: string;
}
export declare class GetPipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or variable with the given UUID was not found.
     */
    error?: Record<string, any>;
    /**
     * The variable.
     */
    pipelineVariable?: Record<string, any>;
}
