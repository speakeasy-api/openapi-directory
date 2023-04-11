import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRecruitingPlayersRequest extends SpeakeasyBase {
    /**
     * Type of recruit (HighSchool, JUCO, PrepSchool)
     */
    classification?: string;
    /**
     * Position abbreviation filter
     */
    position?: string;
    /**
     * State or province abbreviation filter
     */
    state?: string;
    /**
     * Committed team filter (required if year not specified)
     */
    team?: string;
    /**
     * Recruiting class year (required if team no specified)
     */
    year?: number;
}
export declare class GetRecruitingPlayersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    recruits?: shared.Recruit[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
