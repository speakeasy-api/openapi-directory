import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDraftPicksRequest extends SpeakeasyBase {
    /**
     * Player college filter
     */
    college?: string;
    /**
     * College confrence abbreviation filter
     */
    conference?: string;
    /**
     * NFL team filter
     */
    nflTeam?: string;
    /**
     * NFL position filter
     */
    position?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class GetDraftPicksResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    draftPicks?: shared.DraftPick[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
