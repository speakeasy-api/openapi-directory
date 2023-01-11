import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRefreshTokenRequest extends SpeakeasyBase {
    request?: Record<string, any>;
}
export declare class PostRefreshTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
