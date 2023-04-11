import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsAddSelectedRepoToOrgVariableRequest extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    repositoryId: number;
}
export declare class ActionsAddSelectedRepoToOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
