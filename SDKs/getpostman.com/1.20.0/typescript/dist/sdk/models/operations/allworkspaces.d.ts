import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllWorkspaces200ApplicationJSONWorkspaces extends SpeakeasyBase {
    id?: string;
    name?: string;
    type?: string;
}
/**
 * Valid Response
 */
export declare class AllWorkspaces200ApplicationJSON extends SpeakeasyBase {
    workspaces?: AllWorkspaces200ApplicationJSONWorkspaces[];
}
export declare class AllWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    allWorkspaces200ApplicationJSONObject?: AllWorkspaces200ApplicationJSON;
}
