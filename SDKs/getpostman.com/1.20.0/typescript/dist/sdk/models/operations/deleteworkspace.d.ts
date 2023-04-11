import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    workspaceId: string;
}
export declare class DeleteWorkspace200ApplicationJSONWorkspace extends SpeakeasyBase {
    id?: string;
}
/**
 * Successful Response
 */
export declare class DeleteWorkspace200ApplicationJSON extends SpeakeasyBase {
    workspace?: DeleteWorkspace200ApplicationJSONWorkspace;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    deleteWorkspace200ApplicationJSONObject?: DeleteWorkspace200ApplicationJSON;
}
