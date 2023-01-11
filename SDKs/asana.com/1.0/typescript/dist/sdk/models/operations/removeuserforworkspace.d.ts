import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveUserForWorkspacePathParams extends SpeakeasyBase {
    workspaceGid: string;
}
export declare class RemoveUserForWorkspaceQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class RemoveUserForWorkspaceRequestBody extends SpeakeasyBase {
    data?: shared.WorkspaceRemoveUserRequest;
}
export declare class RemoveUserForWorkspace204ApplicationJson extends SpeakeasyBase {
    data?: Record<string, any>;
}
export declare class RemoveUserForWorkspaceRequest extends SpeakeasyBase {
    pathParams: RemoveUserForWorkspacePathParams;
    queryParams: RemoveUserForWorkspaceQueryParams;
    request: RemoveUserForWorkspaceRequestBody;
}
export declare class RemoveUserForWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    removeUserForWorkspace204ApplicationJSONObject?: RemoveUserForWorkspace204ApplicationJson;
}
