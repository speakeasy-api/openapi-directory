import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CodespacesDeleteRepoSecretRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The name of the secret.
     */
    secretName: string;
}
export declare class CodespacesDeleteRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
