import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteRepoSecretRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * secret_name parameter
     */
    secretName: string;
}
export declare class ActionsDeleteRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
