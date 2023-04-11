import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProjectUsernameProjectBuildCacheRequest extends SpeakeasyBase {
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    project: string;
    /**
     * XXXXXXXXX
     *
     * @remarks
     *
     */
    username: string;
}
/**
 * status message
 */
export declare class DeleteProjectUsernameProjectBuildCache200ApplicationJSON extends SpeakeasyBase {
    status?: string;
}
export declare class DeleteProjectUsernameProjectBuildCacheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * status message
     */
    deleteProjectUsernameProjectBuildCache200ApplicationJSONObject?: DeleteProjectUsernameProjectBuildCache200ApplicationJSON;
}
