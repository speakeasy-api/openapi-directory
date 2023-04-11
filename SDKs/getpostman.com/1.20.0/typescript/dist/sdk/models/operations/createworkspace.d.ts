import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateWorkspaceRequestBodyWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceMocks extends SpeakeasyBase {
    id?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspaceMonitors extends SpeakeasyBase {
    id?: string;
}
export declare class CreateWorkspaceRequestBodyWorkspace extends SpeakeasyBase {
    collections?: CreateWorkspaceRequestBodyWorkspaceCollections[];
    description?: string;
    environments?: CreateWorkspaceRequestBodyWorkspaceEnvironments[];
    mocks?: CreateWorkspaceRequestBodyWorkspaceMocks[];
    monitors?: CreateWorkspaceRequestBodyWorkspaceMonitors[];
    name?: string;
    type?: string;
}
export declare class CreateWorkspaceRequestBody extends SpeakeasyBase {
    workspace?: CreateWorkspaceRequestBodyWorkspace;
}
export declare class CreateWorkspace400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Instance supplied not found
 */
export declare class CreateWorkspace400ApplicationJSON extends SpeakeasyBase {
    error?: CreateWorkspace400ApplicationJSONError;
}
export declare class CreateWorkspace200ApplicationJSONWorkspace extends SpeakeasyBase {
    id?: string;
    name?: string;
}
/**
 * Successful Response
 */
export declare class CreateWorkspace200ApplicationJSON extends SpeakeasyBase {
    workspace?: CreateWorkspace200ApplicationJSONWorkspace;
}
export declare class CreateWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    createWorkspace200ApplicationJSONObject?: CreateWorkspace200ApplicationJSON;
    /**
     * Instance supplied not found
     */
    createWorkspace400ApplicationJSONObject?: CreateWorkspace400ApplicationJSON;
}
