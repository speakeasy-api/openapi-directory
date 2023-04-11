import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetContributorsStatsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetContributorsStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
     *
     * @remarks
     * *   `a` - Number of additions
     * *   `d` - Number of deletions
     * *   `c` - Number of commits
     */
    contributorActivities?: shared.ContributorActivity[];
    /**
     * Accepted
     */
    reposGetContributorsStats202ApplicationJSONObject?: Record<string, any>;
}
