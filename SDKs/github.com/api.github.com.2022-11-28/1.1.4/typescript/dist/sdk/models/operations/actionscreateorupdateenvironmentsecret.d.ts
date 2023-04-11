import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsCreateOrUpdateEnvironmentSecretRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/reference/actions#get-an-environment-public-key) endpoint.
     */
    encryptedValue: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId: string;
}
export declare class ActionsCreateOrUpdateEnvironmentSecretRequest extends SpeakeasyBase {
    requestBody: ActionsCreateOrUpdateEnvironmentSecretRequestBody;
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
export declare class ActionsCreateOrUpdateEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a secret
     */
    emptyObject?: Record<string, any>;
}
