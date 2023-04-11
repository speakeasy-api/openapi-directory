import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeletePipelineVariableForTeamRequest extends SpeakeasyBase {
    /**
     * The account.
     */
    username: string;
    /**
     * The UUID of the variable to delete.
     */
    variableUuid: string;
}
export declare class DeletePipelineVariableForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The account or the variable with the provided UUID does not exist.
     */
    error?: Record<string, any>;
}
