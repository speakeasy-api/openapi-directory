import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetParticipationStatsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetParticipationStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * The array order is oldest week (index 0) to most recent week.
     */
    participationStats?: shared.ParticipationStats;
}
