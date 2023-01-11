import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostTeamsUsernameProjectsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class PostTeamsUsernameProjectsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostTeamsUsernameProjectsRequest extends SpeakeasyBase {
    pathParams: PostTeamsUsernameProjectsPathParams;
    request: Record<string, any>;
    security: PostTeamsUsernameProjectsSecurity;
}
export declare class PostTeamsUsernameProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    project?: Record<string, any>;
}
