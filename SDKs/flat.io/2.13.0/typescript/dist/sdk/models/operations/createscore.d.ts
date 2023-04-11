import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateScoreSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class CreateScoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad score creation request
     */
    flatErrorResponse?: shared.FlatErrorResponse;
    /**
     * Score created
     */
    scoreDetails?: shared.ScoreDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
