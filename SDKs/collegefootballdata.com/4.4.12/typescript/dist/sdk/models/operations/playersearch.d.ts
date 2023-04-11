import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlayerSearchRequest extends SpeakeasyBase {
    /**
     * Position abbreviation filter
     */
    position?: string;
    /**
     * Term to search on
     */
    searchTerm: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Year filter
     */
    year?: number;
}
export declare class PlayerSearchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playerSearchResults?: shared.PlayerSearchResult[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
