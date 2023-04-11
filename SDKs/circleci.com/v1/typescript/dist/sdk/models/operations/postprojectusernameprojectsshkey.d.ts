import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostProjectUsernameProjectSshKeyContentTypeEnum {
    ApplicationJson = "application/json"
}
export declare class PostProjectUsernameProjectSshKeyRequestBody extends SpeakeasyBase {
    hostname?: string;
    privateKey?: string;
}
export declare class PostProjectUsernameProjectSshKeyRequest extends SpeakeasyBase {
    contentType: PostProjectUsernameProjectSshKeyContentTypeEnum;
    requestBody: PostProjectUsernameProjectSshKeyRequestBody;
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
/**
 * no response expected
 */
export declare class PostProjectUsernameProjectSshKeyDefaultApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class PostProjectUsernameProjectSshKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * no response expected
     */
    postProjectUsernameProjectSshKeyDefaultApplicationJSONObject?: PostProjectUsernameProjectSshKeyDefaultApplicationJSON;
}
