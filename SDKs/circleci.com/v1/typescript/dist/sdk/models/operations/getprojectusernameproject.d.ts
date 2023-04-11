import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProjectUsernameProjectRequest extends SpeakeasyBase {
    /**
     * Restricts which builds are returned.
     *
     * @remarks
     * Set to "completed", "successful", "failed", "running", or defaults to no filter.
     *
     */
    filter?: shared.FilterEnum;
    /**
     * The number of builds to return. Maximum 100, defaults to 30.
     *
     * @remarks
     *
     */
    limit?: number;
    /**
     * The API returns builds starting from this offset, defaults to 0.
     *
     * @remarks
     *
     */
    offset?: number;
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
export declare class GetProjectUsernameProjectResponse extends SpeakeasyBase {
    /**
     * Build summary for each of the last 30 builds
     */
    builds?: shared.Build[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
