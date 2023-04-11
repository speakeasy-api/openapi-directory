import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesRemoveRepositoryForSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    repositoryId: number;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesRemoveRepositoryForSecretForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
