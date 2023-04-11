import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetSelectedReposForOrgVariableRequestBody extends SpeakeasyBase {
    /**
     * The IDs of the repositories that can access the organization variable.
     */
    selectedRepositoryIds: number[];
}
export declare class ActionsSetSelectedReposForOrgVariableRequest extends SpeakeasyBase {
    requestBody: ActionsSetSelectedReposForOrgVariableRequestBody;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsSetSelectedReposForOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
