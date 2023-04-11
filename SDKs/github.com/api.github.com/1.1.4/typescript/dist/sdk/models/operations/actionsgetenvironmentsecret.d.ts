import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetEnvironmentSecretRequest extends SpeakeasyBase {
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
export declare class ActionsGetEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsSecret?: shared.ActionsSecret;
}
