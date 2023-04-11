import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsCreateOrUpdateRepoSecretRequestBody extends SpeakeasyBase {
    /**
     * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/enterprise-server@2.22/rest/reference/actions#get-a-repository-public-key) endpoint.
     */
    encryptedValue?: string;
    /**
     * ID of the key you used to encrypt the secret.
     */
    keyId?: string;
}
export declare class ActionsCreateOrUpdateRepoSecretRequest extends SpeakeasyBase {
    requestBody: ActionsCreateOrUpdateRepoSecretRequestBody;
    owner: string;
    repo: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsCreateOrUpdateRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when creating a secret
     */
    actionsCreateOrUpdateRepoSecret201ApplicationJSONObject?: Record<string, any>;
}
