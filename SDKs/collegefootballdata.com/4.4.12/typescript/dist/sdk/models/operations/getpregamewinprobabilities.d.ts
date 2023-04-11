import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPregameWinProbabilitiesRequest extends SpeakeasyBase {
    /**
     * regular or postseason
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
    year?: number;
}
export declare class GetPregameWinProbabilitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    pregameWPS?: shared.PregameWP[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
