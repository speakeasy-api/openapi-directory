import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of key to create. Can be 'deploy-key' or 'github-user-key'.
 *
 * @remarks
 *
 */
export declare enum PostProjectUsernameProjectCheckoutKeyRequestBodyEnum {
    DeployKey = "deploy-key",
    GithubUserKey = "github-user-key"
}
export declare class PostProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
    /**
     * The type of key to create. Can be 'deploy-key' or 'github-user-key'.
     *
     * @remarks
     *
     */
    requestBody?: PostProjectUsernameProjectCheckoutKeyRequestBodyEnum;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
export declare class PostProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * checkout key
     */
    key?: shared.Key;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
