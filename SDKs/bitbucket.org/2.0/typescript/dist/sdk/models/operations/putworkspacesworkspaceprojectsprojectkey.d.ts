import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWorkspacesWorkspaceProjectsProjectKeyPathParams extends SpeakeasyBase {
    projectKey: string;
    workspace: string;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeyRequest extends SpeakeasyBase {
    pathParams: PutWorkspacesWorkspaceProjectsProjectKeyPathParams;
    request: Record<string, any>;
    security: PutWorkspacesWorkspaceProjectsProjectKeySecurity;
}
export declare class PutWorkspacesWorkspaceProjectsProjectKeyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    error?: Record<string, any>;
    project?: Record<string, any>;
}
