import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspacesWorkspaceProjectsPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class PostWorkspacesWorkspaceProjectsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostWorkspacesWorkspaceProjectsRequest extends SpeakeasyBase {
    pathParams: PostWorkspacesWorkspaceProjectsPathParams;
    request: Record<string, any>;
    security: PostWorkspacesWorkspaceProjectsSecurity;
}
export declare class PostWorkspacesWorkspaceProjectsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    project?: Record<string, any>;
}
