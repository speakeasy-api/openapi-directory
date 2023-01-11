import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAuthOauthTokenRequestBody extends SpeakeasyBase {
    clientId: string;
    clientSecret: string;
    grantType: string;
    scope: string;
}
export declare class PostAuthOauthTokenRequest extends SpeakeasyBase {
    request: PostAuthOauthTokenRequestBody;
}
export declare class PostAuthOauthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
