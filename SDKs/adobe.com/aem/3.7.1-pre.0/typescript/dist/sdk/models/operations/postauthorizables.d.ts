import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAuthorizablesRequest extends SpeakeasyBase {
    authorizableId: string;
    createGroup?: string;
    createUser?: string;
    intermediatePath: string;
    profileGivenName?: string;
    repPassword?: string;
}
export declare class PostAuthorizablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    postAuthorizablesDefaultTextHTMLString?: string;
}
