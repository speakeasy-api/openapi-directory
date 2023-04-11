import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleWorkspaceRequest extends SpeakeasyBase {
    workspaceId: string;
}
export declare class SingleWorkspace404ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Workspace Not Found
 */
export declare class SingleWorkspace404ApplicationJSON extends SpeakeasyBase {
    error?: SingleWorkspace404ApplicationJSONError;
}
export declare class SingleWorkspace200ApplicationJSONWorkspaceCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class SingleWorkspace200ApplicationJSONWorkspaceEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
export declare class SingleWorkspace200ApplicationJSONWorkspace extends SpeakeasyBase {
    collections?: SingleWorkspace200ApplicationJSONWorkspaceCollections[];
    description?: string;
    environments?: SingleWorkspace200ApplicationJSONWorkspaceEnvironments[];
    id?: string;
    name?: string;
    type?: string;
}
/**
 * Valid Response
 */
export declare class SingleWorkspace200ApplicationJSON extends SpeakeasyBase {
    workspace?: SingleWorkspace200ApplicationJSONWorkspace;
}
export declare class SingleWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    singleWorkspace200ApplicationJSONObject?: SingleWorkspace200ApplicationJSON;
    /**
     * Workspace Not Found
     */
    singleWorkspace404ApplicationJSONObject?: SingleWorkspace404ApplicationJSON;
}
