import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsUpdateRepoVariableRequestBody extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name?: string;
    /**
     * The value of the variable.
     */
    value?: string;
}
export declare class ActionsUpdateRepoVariableRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateRepoVariableRequestBody;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ActionsUpdateRepoVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
