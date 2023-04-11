import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPipelineVariablesForTeamRequest extends SpeakeasyBase {
    /**
     * The account.
     */
    username: string;
}
export declare class GetPipelineVariablesForTeamResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The found account level variables.
     */
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
