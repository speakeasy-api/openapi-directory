import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreatePipelineVariableForTeamRequest extends SpeakeasyBase {
    /**
     * The variable to create.
     */
    requestBody?: Record<string, any>;
    /**
     * The account.
     */
    username: string;
}
export declare class CreatePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account does not exist.
     */
    error?: Record<string, any>;
    /**
     * The created variable.
     */
    pipelineVariable?: Record<string, any>;
}
