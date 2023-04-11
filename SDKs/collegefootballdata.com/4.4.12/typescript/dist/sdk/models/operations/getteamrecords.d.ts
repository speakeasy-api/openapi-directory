import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTeamRecordsRequest extends SpeakeasyBase {
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetTeamRecordsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    teamRecords?: shared.TeamRecord[];
}
