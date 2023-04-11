import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteEnvironmentVariableRequest extends SpeakeasyBase {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
export declare class ActionsDeleteEnvironmentVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
