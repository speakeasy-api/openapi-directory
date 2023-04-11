import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodespacesGetSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesGetSecretForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    codespacesSecret?: shared.CodespacesSecret;
}
