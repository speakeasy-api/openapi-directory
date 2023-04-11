import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReposGetCodeFrequencyStatsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetCodeFrequencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
     */
    codeFrequencyStats?: number[][];
    /**
     * Accepted
     */
    reposGetCodeFrequencyStats202ApplicationJSONObject?: Record<string, any>;
}
