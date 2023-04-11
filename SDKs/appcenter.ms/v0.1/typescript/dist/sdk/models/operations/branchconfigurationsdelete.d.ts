import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BranchConfigurationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BranchConfigurationsDeleteRequest extends SpeakeasyBase {
    requestBody?: Record<string, any>;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The branch name
     */
    branch: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Success
 */
export declare class BranchConfigurationsDelete200ApplicationJSON extends SpeakeasyBase {
    message: string;
}
export declare class BranchConfigurationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    branchConfigurationsDelete200ApplicationJSONObject?: BranchConfigurationsDelete200ApplicationJSON;
}
