import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
    id?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
    id?: string;
}
export declare class UpdateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
    collections?: UpdateWorkspaceRequestBodyWorkspaceCollections[];
    description?: string;
    environments?: UpdateWorkspaceRequestBodyWorkspaceEnvironments[];
    mocks?: UpdateWorkspaceRequestBodyWorkspaceMocks[];
    monitors?: UpdateWorkspaceRequestBodyWorkspaceMonitors[];
    name?: string;
}
export declare class UpdateWorkspaceRequestBody extends SpeakeasyBase {
    workspace?: UpdateWorkspaceRequestBodyWorkspace;
}
export declare class UpdateWorkspaceRequest extends SpeakeasyBase {
    requestBody?: UpdateWorkspaceRequestBody;
    workspaceId: string;
}
export declare class UpdateWorkspace404ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Specified workspace/entities do not exist
 */
export declare class UpdateWorkspace404ApplicationJSON extends SpeakeasyBase {
    error?: UpdateWorkspace404ApplicationJSONError;
}
export declare class UpdateWorkspace403ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Not enough permissions
 */
export declare class UpdateWorkspace403ApplicationJSON extends SpeakeasyBase {
    error?: UpdateWorkspace403ApplicationJSONError;
}
export declare class UpdateWorkspace200ApplicationJSONWorkspace extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * Successful Response
 */
export declare class UpdateWorkspace200ApplicationJSON extends SpeakeasyBase {
    workspace?: UpdateWorkspace200ApplicationJSONWorkspace;
}
export declare class UpdateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    updateWorkspace200ApplicationJSONObject?: UpdateWorkspace200ApplicationJSON;
    /**
     * Not enough permissions
     */
    updateWorkspace403ApplicationJSONObject?: UpdateWorkspace403ApplicationJSON;
    /**
     * Specified workspace/entities do not exist
     */
    updateWorkspace404ApplicationJSONObject?: UpdateWorkspace404ApplicationJSON;
}
