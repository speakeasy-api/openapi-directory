import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAdvancedBoxScoreRequest extends SpeakeasyBase {
    /**
     * Game id parameters
     */
    gameId: number;
}
export declare class GetAdvancedBoxScoreResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    boxScore?: shared.BoxScore;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
