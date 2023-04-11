import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodespacesDeleteSecretForAuthenticatedUserRequest extends SpeakeasyBase {
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesDeleteSecretForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
