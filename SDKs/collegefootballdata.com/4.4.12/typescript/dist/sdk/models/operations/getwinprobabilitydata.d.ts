import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWinProbabilityDataRequest extends SpeakeasyBase {
    /**
     * Game id filter
     */
    gameId: number;
}
export declare class GetWinProbabilityDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    playWPS?: shared.PlayWP[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
