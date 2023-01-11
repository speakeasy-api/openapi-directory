import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTeamsUsernameProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    username: string;
}
export declare class PutTeamsUsernameProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutTeamsUsernameProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: PutTeamsUsernameProjectsProjectKeyPathParams;
    request: Record<string, any>;
    security: PutTeamsUsernameProjectsProjectKeySecurity;
}
export declare class PutTeamsUsernameProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    project?: Record<string, any>;
}
