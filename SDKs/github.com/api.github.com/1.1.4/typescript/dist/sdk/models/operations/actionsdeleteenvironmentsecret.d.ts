import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteEnvironmentSecretRequest extends SpeakeasyBase {
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class ActionsDeleteEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
