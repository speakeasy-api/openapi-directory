import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecentBuildsRequest extends SpeakeasyBase {
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
}
export declare class GetRecentBuildsResponse extends SpeakeasyBase {
    /**
     * Build summary for each of the last 30 recent builds
     */
    builds?: shared.Build[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
