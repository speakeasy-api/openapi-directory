import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetGameMediaRequest extends SpeakeasyBase {
    /**
     * Division classification filter (fbs/fcs/ii/iii)
     */
    classification?: string;
    /**
     * Conference filter
     */
    conference?: string;
    /**
     * Media type filter (tv, radio, web, ppv, or mobile)
     */
    mediaType?: string;
    /**
     * Season type filter (regular, postseason, or both)
     */
    seasonType?: string;
    /**
     * Team filter
     */
    team?: string;
    /**
     * Week filter
     */
    week?: number;
    /**
     * Year filter
     */
    year: number;
}
export declare class GetGameMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    gameMedias?: shared.GameMedia[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
